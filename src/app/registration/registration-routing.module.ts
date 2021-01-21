import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationPage } from './registration.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationPage
  },
  {
    path: 'reg-commerciante',
    loadChildren: () => import('./reg-commerciante/reg-commerciante.module').then( m => m.RegCommerciantePageModule)
  },
  {
    path: 'registration-cliente',
    loadChildren: () => import('./registration-cliente/registration-cliente.module').then( m => m.RegistrationClientePageModule)
  },
  {
    path: 'registration-corriere',
    loadChildren: () => import('./registration-corriere/registration-corriere.module').then( m => m.RegistrationCorrierePageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationPageRoutingModule {}
