import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EliminaProdottoPage } from './elimina-prodotto.page';

const routes: Routes = [
  {
    path: '',
    component: EliminaProdottoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliminaProdottoPageRoutingModule {}
