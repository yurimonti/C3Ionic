import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationCorrierePage } from './registration-corriere.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationCorrierePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationCorrierePageRoutingModule {}
