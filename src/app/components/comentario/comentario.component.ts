import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CapamediaService } from 'src/app/services/capamedia.service';
import { Comentario } from '../../models/comentario';

@Component({
  selector: 'comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css'],
})
export class ComentarioComponent implements OnInit {

  param: any = {
    usuario: '',
    publicacion: ''
  }
  
  @Input() usuarioConsulta: any;
  @Input() publicacionConsulta: any;

  //public _usuarioActual: string;
  //public _publicacionActual: string;

  comentarios: any = [];

  public comentario: Comentario = {
    comentario: 0,
    publicacion: 0,
    usuario: 0,
    texto: ''
  };

  constructor(
    private _capamediaService: CapamediaService,
    //private _router: Router,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    //this._usuarioActual = '0';
    //this._publicacionActual = '0';
  }

  ngOnInit(): void {
    console.log('usuario consulta: ' + this.usuarioConsulta);
    
    //obteniendo los datos de un usuario consultado
    /*this._usuarioActual = this._capamediaService.LSGetValue(
      this._capamediaService.CONST_USUARIO_CONSULTA
    );
    if (!this._usuarioActual) this._usuarioActual = '0';*/

    //obteniendo los datos de un post consultado
    /*this._publicacionActual = this._capamediaService.LSGetValue(
      this._capamediaService.CONST_PUBLICACION_CONSULTA
    );
    if (!this._publicacionActual) this._publicacionActual = '0';*/

    // const param: any = {
    //   //usuario: this._usuarioActual,
    //   usuario: this.usuarioConsulta,
    //   publicacion: this._publicacionActual
    // }

    //this.param.usuario = this.usuarioConsulta;
    //this.param.publicacion = this._publicacionActual;

    if(!this.usuarioConsulta){
      //this.usuarioConsulta = '0';
      this.usuarioConsulta = this._capamediaService.LSGetValue(this._capamediaService.CONST_USUARIO);
      //console.log(this.usuarioConsulta);
    } 
    if(!this.publicacionConsulta) this.publicacionConsulta = '0';

    this._capamediaService.getComentarioTodo(this.usuarioConsulta, /*this._publicacionActual*/ this.publicacionConsulta).subscribe(
      (res) => {
        //console.log(res);
        this.comentarios = res;
        console.log(this.comentarios);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // TODO: agregar comentario no debe verse cuando se está viendo el perfil de un usuario
  saveComentario() {
    this.comentario.usuario = this.usuarioConsulta;
    this.comentario.publicacion = this.publicacionConsulta;
    console.log(this.comentario);
    this._capamediaService.saveComentario(this.comentario).subscribe(
      (res) => {
        console.log(res);
        this._capamediaService.LSSetValue(
          this._capamediaService.CONST_PUBLICACION_CONSULTA,
          this.publicacionConsulta
        );
        console.log(this._capamediaService.LSGetValue(this._capamediaService.CONST_PUBLICACION_CONSULTA));
        window.location.reload();
      },
      (err) => console.log(err)
    );
  }
}
