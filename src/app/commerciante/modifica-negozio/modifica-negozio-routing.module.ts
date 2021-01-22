import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificaNegozioPage } from './modifica-negozio.page';

const routes: Routes = [
  {
    path: '',
    component: ModificaNegozioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificaNegozioPageRoutingModule {}
