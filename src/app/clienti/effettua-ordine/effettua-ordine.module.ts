import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EffettuaOrdinePageRoutingModule } from './effettua-ordine-routing.module';

import { EffettuaOrdinePage } from './effettua-ordine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EffettuaOrdinePageRoutingModule
  ],
  declarations: [EffettuaOrdinePage]
})
export class EffettuaOrdinePageModule {}
