import { Component, OnInit } from '@angular/core';
import { CapamediaService } from '../../services/capamedia.service';

@Component({
  selector: 'publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  publicaciones: any = [];

  constructor(private _capamediaService: CapamediaService) {

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
}
