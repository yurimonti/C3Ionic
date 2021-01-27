import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccettaOrdiniPage } from './accetta-ordini.page';

const routes: Routes = [
  {
    path: '',
    component: AccettaOrdiniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccettaOrdiniPageRoutingModule {}
