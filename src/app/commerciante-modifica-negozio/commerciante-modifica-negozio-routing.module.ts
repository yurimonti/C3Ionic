import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommercianteModificaNegozioPage } from './commerciante-modifica-negozio.page';

const routes: Routes = [
  {
    path: '',
    component: CommercianteModificaNegozioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommercianteModificaNegozioPageRoutingModule {}
