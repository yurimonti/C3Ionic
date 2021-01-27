import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdiniAccettatiPage } from './ordini-accettati.page';

const routes: Routes = [
  {
    path: '',
    component: OrdiniAccettatiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdiniAccettatiPageRoutingModule {}
