import { Component, OnInit } from '@angular/core';
import { CapamediaService } from '../../services/capamedia.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  

  constructor(private _capamediaService: CapamediaService) {

  }

  ngOnInit(): void {
    this._capamediaService.getUsuarioTodo().subscribe(
      res => console.log(res),
      err => console.log(err)
      
      
    );
  }
}
