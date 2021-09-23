import { Component, OnInit } from '@angular/core';
import { CapamediaService } from '../../services/capamedia.service';
import { Catedratico } from '../../models/catedratico';
import { Curso } from '../../models/curso';
import { Publicacion } from '../../models/publicacion';

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

  constructor(private _capamediaService: CapamediaService) {}

  ngOnInit(): void {
    this.getListaCatedratico();
    this.getListaCurso();
  }

  getListaCatedratico() {
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
        
      },
      (err) => console.log(err)
    );
  }
}
