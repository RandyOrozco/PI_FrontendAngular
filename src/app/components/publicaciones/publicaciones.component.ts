import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CapamediaService } from '../../services/capamedia.service';

@Component({
  selector: 'publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css'],
})
export class PublicacionesComponent implements OnInit {
  public _usuarioActual: string;
  constructor(private _capamediaService: CapamediaService) {
    this._usuarioActual = '0';
  }

  ngOnInit(): void {
    //obteniendo los datos de un usuario consultado
    this._usuarioActual = this._capamediaService.LSGetValue(
      this._capamediaService.CONST_USUARIO_CONSULTA
    );
  }
}
