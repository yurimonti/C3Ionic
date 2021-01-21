import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientiPage } from './clienti.page';

const routes: Routes = [
  {
    path: '',
    component: ClientiPage
  },  {
    path: 'effettua-ordine',
    loadChildren: () => import('./effettua-ordine/effettua-ordine.module').then( m => m.EffettuaOrdinePageModule)
  },
  {
    path: 'controlla-ordini',
    loadChildren: () => import('./controlla-ordini/controlla-ordini.module').then( m => m.ControllaOrdiniPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientiPageRoutingModule {}
