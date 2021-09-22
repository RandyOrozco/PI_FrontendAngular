import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { PublicacionComponent } from './components/publicacion/publicacion.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'publicacion',
    component: PublicacionComponent,
  },
  {
    path: 'usuario',
    component: UsuarioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
