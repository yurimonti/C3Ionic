import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegCommerciantePage } from './reg-commerciante.page';

const routes: Routes = [
  {
    path: '',
    component: RegCommerciantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegCommerciantePageRoutingModule {}
