import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificaNegozioPage } from './modifica-negozio.page';

const routes: Routes = [
  {
    path: '',
    component: ModificaNegozioPage
  },
  {
    path: 'elimina-prodotto',
    loadChildren: () => import('./elimina-prodotto/elimina-prodotto.module').then( m => m.EliminaProdottoPageModule)
  },
  {
    path: 'aggiungi-prodotto',
    loadChildren: () => import('./aggiungi-prodotto/aggiungi-prodotto.module').then( m => m.AggiungiProdottoPageModule)
  },
  {
    path: 'cambia-quantita',
    loadChildren: () => import('./cambia-quantita/cambia-quantita.module').then( m => m.CambiaQuantitaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificaNegozioPageRoutingModule {}
