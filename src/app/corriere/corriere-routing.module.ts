import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorrierePage } from './corriere.page';

const routes: Routes = [
  {
    path: '',
    component: CorrierePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorrierePageRoutingModule {}
