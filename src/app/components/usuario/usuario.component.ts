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
    this._capamediaService.getUsuarioTodo().subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
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

    /*console.log(resultado);
    if (resultado) {
      console.log('login exitoso');
      this._capamediaService.LSSetValue(
        this._capamediaService.CONST_USUARIO,
        this.login.registroacademico
      );
      this._router.navigate(['/publicaciones']);
    } else {
      console.log('login fallido');
    }*/
  }

  cancelar() {
    this._router.navigate(['/']);
  }
}
