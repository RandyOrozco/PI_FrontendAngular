import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CapamediaService } from './services/capamedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public _menuVisible: boolean;

  title = 'pifrontend';
  constructor(
    private _capamediaService: CapamediaService,
    //private _router: Router,
    private _route: ActivatedRoute,
    private _router: Router){
      this._menuVisible = false;
      if(this._capamediaService.LSGetValue(this._capamediaService.CONST_USUARIO)){
        this._menuVisible = true;
      } else {
        this._router.navigate(['/publicaciones']);
      }
    }
}
