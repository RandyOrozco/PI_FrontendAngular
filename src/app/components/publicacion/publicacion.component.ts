import { Component, OnInit, Input } from '@angular/core';
import { CapamediaService } from '../../services/capamedia.service';
import { Catedratico } from '../../models/catedratico';
import { Curso } from '../../models/curso';
import { Publicacion } from '../../models/publicacion';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css'],
})
export class PublicacionComponent implements OnInit {
  public _usuarioConsulta: string;
  public _publicacionActual: string;

  seleccionadoCatedratico: Catedratico = { catedratico: 0, nombre: 'no se' };
  seleccionadoCurso: Curso = { curso: 0, nombre: 'no se' };
  listaCatedratico: Catedratico[] = [];
  listaCurso: Curso[] = [];

  publicacion: Publicacion = {
    usuario: 1,
    curso: 0,
    catedratico: 0,
    titulo: '',
    texto: '',
  };

  //pActual: any;
  
  // this.publicacionActual.publicacion = e.publicacion;
  // this.publicacionActual.usuario = e.usuario;
  // this.publicacionActual.curso = e.curso;
  // this.publicacionActual.catedratico = e.catedratico;
  // this.publicacionActual.fecha = e.fecha;
  // this.publicacionActual.titulo = e.titulo;
  // this.publicacionActual.texto = e.texto;
  // this.publicacionActual.registroacademico = e.registroacademico;
  // this.publicacionActual.nombreusuario = e.nombreusuario;
  // this.publicacionActual.apellido = e.apellido;
  // this.publicacionActual.acercade = e.acercade;
  publicacionActual: any = {
    publicacion: 1,
    usuario: 0,
    curso: 0,
    catedratico: '',
    fecha: '',
    titulo: 1,
    texto: 0,
    registroacademico: 0,
    nombreusuario: '',
    apellido: '',
    acercade: 1,
  };
  resultados: any = [];

  constructor(
    private _capamediaService: CapamediaService,
    //private _router: Router,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this._usuarioConsulta = '0';
    this._publicacionActual = '0';
  }

  ngOnInit(): void {
    this._publicacionActual = this._capamediaService.LSGetValue(
      this._capamediaService.CONST_PUBLICACION_CONSULTA
    );
    this.getListaCatedratico();
    this.getListaCurso();
    this.getPost();
    //this.pActual = this._route.snapshot.params;
  }

  getPost() {
    //console.log(this._usuarioActual);

    this._capamediaService.getPublicacionUno(this._publicacionActual).subscribe(
      (res) => {
        //resultado = res;
        //console.log(res);
        if (res) {
          /*console.log('hola mundo');
          console.log(res);
          console.log(Object.values(res));
          console.log('hola mundo');*/
          const ol = Object.values(res);
          ol.forEach((e) => {
            this.publicacionActual.publicacion = e.publicacion;
            this.publicacionActual.usuario = e.usuario;
            this.publicacionActual.curso = e.curso;
            this.publicacionActual.catedratico = e.catedratico;
            this.publicacionActual.fecha = e.fecha;
            this.publicacionActual.titulo = e.titulo;
            this.publicacionActual.texto = e.texto;
            this.publicacionActual.registroacademico = e.registroacademico;
            this.publicacionActual.nombreusuario = e.nombreusuario;
            this.publicacionActual.apellido = e.apellido;
            this.publicacionActual.acercade = e.acercade;
          });
          //console.log(this.usuarioActual);
        }
      },
      (err) => console.log(err)
    );
  }

  // TODO: comentar esto
  /*getPost() {
    this._route.paramMap.subscribe((params) => {
      //this.pActual = JSON.parse(params.get('publicacion') || '');
      if (this._publicacionActual) {
        console.log(this._publicacionActual);
        this._capamediaService
          .getPublicacionUno(this._publicacionActual)
          .subscribe(
            (res) => {
              this.resultados = res;
              console.log('hola mundo res');
              console.log(res);
              console.log('hola mundo resultados');
              this.resultados.forEach((e: any) => {
                console.log(e);
              });
              //console.log(JSON.parse(JSON.stringify(res)));
              //console.log(res);
              //this.publicacionActual.catedratico = JSON.stringify(res).catedratico;
            },
            (err) => {
              console.log(err);
            }
          );
      } else {
        this._publicacionActual = '';
      }
    });
    console.log('hola mundo resultados');
    this.resultados.forEach((e: any) => {
      console.log(e);
    });

  }*/

  leer() {
    //console.log('hola mundo');

    console.log(this.resultados);
  }

  getListaCatedratico() {
    this.leer();
    this._capamediaService.getCatedraticoTodo().subscribe(
      (res) => {
        this.listaCatedratico = <Catedratico[]>res;
        //console.log(this.listaCatedratico);
      },
      (err) => console.log(err)
    );
  }

  getListaCurso() {
    this._capamediaService.getCursoTodo().subscribe(
      (res) => {
        //console.log(res);
        this.listaCurso = <Curso[]>res;
        //console.log(this.listaCurso);
      },
      (err) => console.log(err)
    );
  }

  savePublicacion() {
    this.publicacion.usuario = this._capamediaService.LSGetValue(
      this._capamediaService.CONST_USUARIO
    );
    console.log(this.publicacion);
    this._capamediaService.savePublicacion(this.publicacion).subscribe(
      (res) => {
        console.log(res);
        this._router.navigate(['/publicaciones']);
      },
      (err) => console.log(err)
    );
  }
}
