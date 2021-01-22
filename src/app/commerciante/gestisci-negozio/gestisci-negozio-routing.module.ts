import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestisciNegozioPage } from './gestisci-negozio.page';

const routes: Routes = [
  {
    path: '',
    component: GestisciNegozioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestisciNegozioPageRoutingModule {}
