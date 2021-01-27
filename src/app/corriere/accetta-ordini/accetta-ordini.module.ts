import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccettaOrdiniPageRoutingModule } from './accetta-ordini-routing.module';

import { AccettaOrdiniPage } from './accetta-ordini.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccettaOrdiniPageRoutingModule
  ],
  declarations: [AccettaOrdiniPage]
})
export class AccettaOrdiniPageModule {}
