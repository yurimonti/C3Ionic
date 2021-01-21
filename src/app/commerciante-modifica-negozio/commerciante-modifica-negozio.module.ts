import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommercianteModificaNegozioPageRoutingModule } from './commerciante-modifica-negozio-routing.module';

import { CommercianteModificaNegozioPage } from './commerciante-modifica-negozio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommercianteModificaNegozioPageRoutingModule
  ],
  declarations: [CommercianteModificaNegozioPage]
})
export class CommercianteModificaNegozioPageModule {}
