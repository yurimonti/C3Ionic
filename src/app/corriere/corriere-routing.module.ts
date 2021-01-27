import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorrierePage } from './corriere.page';

const routes: Routes = [
  {
    path: '',
    component: CorrierePage
  },
  {
    path: 'ordini-accettati',
    loadChildren: () => import('./ordini-accettati/ordini-accettati.module').then( m => m.OrdiniAccettatiPageModule)
  },
  {
    path: 'accetta-ordini',
    loadChildren: () => import('./accetta-ordini/accetta-ordini.module').then( m => m.AccettaOrdiniPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorrierePageRoutingModule {}
