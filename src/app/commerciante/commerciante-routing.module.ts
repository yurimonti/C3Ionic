import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommerciantePage } from './commerciante.page';

const routes: Routes = [
  {
    path: '',
    component: CommerciantePage
  },
  {
    path: 'modifica-negozio',
    loadChildren: () => import('./modifica-negozio/modifica-negozio.module').then( m => m.ModificaNegozioPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommerciantePageRoutingModule {}
