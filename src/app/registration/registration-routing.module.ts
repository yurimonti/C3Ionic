import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationPage } from './registration.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationPage
  },  {
    path: 'reg-commerciante',
    loadChildren: () => import('./reg-commerciante/reg-commerciante.module').then( m => m.RegCommerciantePageModule)
  },
  {
    path: 'reg-type',
    loadChildren: () => import('./reg-type/reg-type.module').then( m => m.RegTypePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationPageRoutingModule {}
