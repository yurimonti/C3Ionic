import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControllaOrdiniPage } from './controlla-ordini.page';

const routes: Routes = [
  {
    path: '',
    component: ControllaOrdiniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControllaOrdiniPageRoutingModule {}
