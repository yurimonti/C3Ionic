import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommerciantePage } from './commerciante.page';

const routes: Routes = [
  {
    path: '',
    component: CommerciantePage
  },  {
    path: 'gestisci-ordini',
    loadChildren: () => import('./gestisci-ordini/gestisci-ordini.module').then( m => m.GestisciOrdiniPageModule)
  },
  {
    path: 'gestisci-negozio',
    loadChildren: () => import('./gestisci-negozio/gestisci-negozio.module').then( m => m.GestisciNegozioPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommerciantePageRoutingModule {}
