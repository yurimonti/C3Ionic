import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommercianteGestisciOrdiniPage } from './commerciante-gestisci-ordini.page';

const routes: Routes = [
  {
    path: '',
    component: CommercianteGestisciOrdiniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommercianteGestisciOrdiniPageRoutingModule {}
