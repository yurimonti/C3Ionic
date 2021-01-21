import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProvaRegistrationPage } from './prova-registration.page';

const routes: Routes = [
  {
    path: '',
    component: ProvaRegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProvaRegistrationPageRoutingModule {}
