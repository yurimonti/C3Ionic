import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegTypePage } from './reg-type.page';

const routes: Routes = [
  {
    path: '',
    component: RegTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegTypePageRoutingModule {}
