import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationClientePage } from './registration-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationClientePageRoutingModule {}
