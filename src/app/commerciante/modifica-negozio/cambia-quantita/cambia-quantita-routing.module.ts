import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambiaQuantitaPage } from './cambia-quantita.page';

const routes: Routes = [
  {
    path: '',
    component: CambiaQuantitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambiaQuantitaPageRoutingModule {}
