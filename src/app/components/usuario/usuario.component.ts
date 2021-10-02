import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CapamediaService } from 'src/app/services/capamedia.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  public _usuarioActual: string;

  public usuarioActual: any = {
    usuario: '',
    registroacademico: '',
    nombre: '',
    apellido: '',
    email: '',
    clave: '',
    fecha: '',
  };

  constructor(
    private _capamediaService: CapamediaService,
    //private _router: Router,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this._usuarioActual = '0';
  }

  ngOnInit(): void {
    /*this._capamediaService.getUsuarioTodo().subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );*/

    //obteniendo los datos de un usuario consultado
    this._usuarioActual = this._capamediaService.LSGetValue(
      this._capamediaService.CONST_USUARIO_CONSULTA
    );

    //comprobando si hay un usuario consultado
    if (this._usuarioActual) {
      this.getDatoUsuario();
      this._capamediaService.LSRemoveValue(this._capamediaService.CONST_USUARIO_CONSULTA);
      return;
    } else {
      this._usuarioActual = '0';
    }

    //obteniendo los datos del usuario registrado
    this._usuarioActual = this._capamediaService.LSGetValue(
      this._capamediaService.CONST_USUARIO
    );
    if (this._usuarioActual) {
      this.getDatoUsuario();
      /*this._usr.forEach((e: { usuario: any; registroacademico: any; nombre: any; apellido: any; email: any; fecha: any; }) => {
        this.usuarioActual.usuario = e.usuario;
        this.usuarioActual.registroacademico = e.registroacademico;
        this.usuarioActual.nombre = e.nombre;
        this.usuarioActual.apellido = e.apellido;
        this.usuarioActual.email = e.email;
        this.usuarioActual.fecha = e.fecha;
      });
      console.log(this._usr);*/
      
      console.log(this.usuarioActual);
      
    } else {
      this._usuarioActual = '0';
    }
  }

  crearUsuario() {
    //console.log(this.login);
    let resultado: any;
    this._capamediaService.saveUsuario(this.usuarioActual).subscribe(
      (res) => {
        //resultado = res;
        //console.log(res);
        if (res) {
          console.log(res);
          this._router.navigate(['/']);
        }
      },
      (err) => console.log(err)
    );
  }

  cancelar() {
    this._router.navigate(['/']);
  }

  getDatoUsuario() {
    //console.log(this._usuarioActual);

    this._capamediaService.getUsuarioUno(this._usuarioActual).subscribe(
      (res) => {
        //resultado = res;
        //console.log(res);
        if (res) {
          /*console.log('hola mundo');
          console.log(res);
          console.log(Object.values(res));
          console.log('hola mundo');*/
          const ol = Object.values(res);
          ol.forEach(e => {
            this.usuarioActual.usuario = e.usuario;
            this.usuarioActual.registroacademico = e.registroacademico;
            this.usuarioActual.nombre = e.nombre;
            this.usuarioActual.apellido = e.apellido;
            this.usuarioActual.email = e.email;
            this.usuarioActual.fecha = e.fecha;
            
          })
          //console.log(this.usuarioActual);
          
        }
      },
      (err) => console.log(err)
    );
  }
}
