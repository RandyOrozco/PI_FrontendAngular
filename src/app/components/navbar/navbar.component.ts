import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CapamediaService } from 'src/app/services/capamedia.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public _menuVisible: boolean;

  constructor(
    private _capamediaService: CapamediaService,
    //private _router: Router,
    private _route: ActivatedRoute,
    private _router: Router
    ) { 
      this._menuVisible = false;
      if(this._capamediaService.LSGetValue(this._capamediaService.CONST_USUARIO)){
        this._menuVisible = true;
      } else {
        this._router.navigate(['/login']);
      }
    }

  ngOnInit(): void {
  }

  logout(){
    this._capamediaService.LSRemoveValue(this._capamediaService.CONST_USUARIO);
    this._router.navigate(['/login']);
  }

}
