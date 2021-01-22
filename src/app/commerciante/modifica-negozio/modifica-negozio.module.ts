import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificaNegozioPageRoutingModule } from './modifica-negozio-routing.module';

import { ModificaNegozioPage } from './modifica-negozio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificaNegozioPageRoutingModule
  ],
  declarations: [ModificaNegozioPage]
})
export class ModificaNegozioPageModule {}
