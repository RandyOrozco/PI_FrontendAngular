import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CapamediaService } from '../../services/capamedia.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: any = {
    registroacademico: '',
    clave: '',
  };

  constructor(
    private _capamediaService: CapamediaService,
    //private _router: Router,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._capamediaService.getUsuarioTodo().subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  comprobarUsuario() {
    //console.log(this.login);
    let resultado: any;
    this._capamediaService.loginUsuario(this.login).subscribe(
      (res) => {
        //resultado = res;
        //console.log(res);
        if (res) {
          console.log('login exitoso');
          console.log(res);
          this._capamediaService.LSSetValue(
            this._capamediaService.CONST_USUARIO,
            this.login.registroacademico
          );
          this._router.navigate(['/publicaciones']);
        }
        //return;
        console.log('login fallido');
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

  irARegistroUsuario() {
    this._router.navigate(['/usuario']);
  }
}
