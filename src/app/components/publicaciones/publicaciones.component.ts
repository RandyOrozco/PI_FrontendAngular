import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CapamediaService } from '../../services/capamedia.service';

@Component({
  selector: 'publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  publicaciones: any = [];

  constructor(
    private _capamediaService: CapamediaService,
    //private _router: Router,
    private _route: ActivatedRoute,
    private _router: Router
  ) {

  }

  ngOnInit(): void {
    this._capamediaService.getPublicacionTodo().subscribe(
      res => {
        //console.log(res);
        this.publicaciones = res;
        console.log(this.publicaciones);
      },
      err => console.log(err)
      
      
    );
  }

  verUsuario(usuario: string){
    this._capamediaService.LSSetValue(
      this._capamediaService.CONST_USUARIO_CONSULTA,
      usuario
    );
    this._router.navigate(['/usuario']);
  }
}
