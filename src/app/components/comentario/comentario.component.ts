import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CapamediaService } from 'src/app/services/capamedia.service';

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

  //public _usuarioActual: string;
  public _publicacionActual: string;

  comentarios: any = [];

  constructor(
    private _capamediaService: CapamediaService,
    //private _router: Router,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    //this._usuarioActual = '0';
    this._publicacionActual = '0';
  }

  ngOnInit(): void {
    console.log('usuario consulta: ' + this.usuarioConsulta);
    
    //obteniendo los datos de un usuario consultado
    /*this._usuarioActual = this._capamediaService.LSGetValue(
      this._capamediaService.CONST_USUARIO_CONSULTA
    );
    if (!this._usuarioActual) this._usuarioActual = '0';*/

    //obteniendo los datos de un post consultado
    this._publicacionActual = this._capamediaService.LSGetValue(
      this._capamediaService.CONST_PUBLICACION
    );
    if (!this._publicacionActual) this._publicacionActual = '0';

    // const param: any = {
    //   //usuario: this._usuarioActual,
    //   usuario: this.usuarioConsulta,
    //   publicacion: this._publicacionActual
    // }

    //this.param.usuario = this.usuarioConsulta;
    //this.param.publicacion = this._publicacionActual;

    this._capamediaService.getComentarioTodo(this.usuarioConsulta, this._publicacionActual).subscribe(
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
}
