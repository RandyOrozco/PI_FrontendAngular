import { Component, OnInit } from '@angular/core';
import { CapamediaService } from '../../services/capamedia.service';
import { Catedratico } from '../../models/catedratico';
import { Curso } from '../../models/curso';
import { Publicacion } from '../../models/publicacion';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { Lexer } from '@angular/compiler';

@Component({
  selector: 'publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css'],
})
export class PublicacionComponent implements OnInit {
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

  pActual: any;
  publicacionActual: Publicacion = {
    usuario: 1,
    curso: 0,
    catedratico: 0,
    titulo: '',
    texto: '',
  };
  resultados: any = [];

  constructor(
    private _capamediaService: CapamediaService,
    //private _router: Router,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getListaCatedratico();
    this.getListaCurso();
    this.getPost();
    //this.pActual = this._route.snapshot.params;
    
  }
  
  getPost() {
    this._route.paramMap.subscribe((params) => {
      this.pActual = JSON.parse(params.get('publicacion') || '');
      if (this.pActual) {
        console.log(this.pActual);
        this._capamediaService.getPublicacionUno(this.pActual).subscribe(
          res => {
             this.resultados = res;
            //console.log(res);
            //console.log(JSON.parse(JSON.stringify(res)));
            //console.log(res);
            //this.publicacionActual.catedratico = JSON.stringify(res).catedratico;
          },
          err => {
            console.log(err);
          }
        );
      } else {
      }
    });
  }

  leer() {
    console.log('hola mundo');

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
