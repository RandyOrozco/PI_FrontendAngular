import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PublicacionComponent } from './components/publicacion/publicacion.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

import { CapamediaService } from './services/capamedia.service';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import { RouterModule } from '@angular/router';
import { ComentarioComponent } from './components/comentario/comentario.component';
import { PubsComponent } from './components/pubs/pubs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    PublicacionComponent,
    UsuarioComponent,
    PublicacionesComponent,
    ComentarioComponent,
    PubsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule/*,
    RouterModule.forRoot([
      {path: 'dashboard', component:NavbarComponent}
    ],{ onSameUrlNavigation: 'reload' })*/
  ],
  providers: [CapamediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
