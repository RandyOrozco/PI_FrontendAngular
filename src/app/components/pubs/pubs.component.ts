import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CapamediaService } from 'src/app/services/capamedia.service';

@Component({
  selector: 'pubs',
  templateUrl: './pubs.component.html',
  styleUrls: ['./pubs.component.css']
})
export class PubsComponent implements OnInit {
  public _usuarioActual: string;

  publicaciones: any = [];
  
  @Input() usuarioConsulta: any;

  constructor(
    private _capamediaService: CapamediaService,
    //private _router: Router,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this._usuarioActual = '0';
  }

  ngOnInit(): void {
    this._capamediaService.getPublicacionTodo(this.usuarioConsulta).subscribe(
      (res) => {
        //console.log(res);
        this.publicaciones = res;
        console.log(this.publicaciones);
      },
      (err) => {
        console.log(err);
      }
    );

    this._usuarioActual = this._capamediaService.LSGetValue(
      this._capamediaService.CONST_USUARIO_CONSULTA
    );
    
  }

  verUsuario(usuario: string) {
    // console.log('hola mundo');
    // console.log(usuario);
    // console.log('hola mundo');
    
    this._capamediaService.LSSetValue(
      this._capamediaService.CONST_USUARIO_CONSULTA,
      usuario
    );
    this._router.navigate(['/usuario']);
  }
}
