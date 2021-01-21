import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommerciantePage } from './commerciante.page';

const routes: Routes = [
  {
    path: '',
    component: CommerciantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommerciantePageRoutingModule {}
