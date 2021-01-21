import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommercianteGestisciOrdiniPageRoutingModule } from './commerciante-gestisci-ordini-routing.module';

import { CommercianteGestisciOrdiniPage } from './commerciante-gestisci-ordini.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommercianteGestisciOrdiniPageRoutingModule
  ],
  declarations: [CommercianteGestisciOrdiniPage]
})
export class CommercianteGestisciOrdiniPageModule {}
