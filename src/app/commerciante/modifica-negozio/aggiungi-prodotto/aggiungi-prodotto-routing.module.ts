import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AggiungiProdottoPage } from './aggiungi-prodotto.page';

const routes: Routes = [
  {
    path: '',
    component: AggiungiProdottoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AggiungiProdottoPageRoutingModule {}
