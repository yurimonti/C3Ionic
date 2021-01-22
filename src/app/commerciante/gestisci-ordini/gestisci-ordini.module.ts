import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestisciOrdiniPageRoutingModule } from './gestisci-ordini-routing.module';

import { GestisciOrdiniPage } from './gestisci-ordini.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestisciOrdiniPageRoutingModule
  ],
  declarations: [GestisciOrdiniPage]
})
export class GestisciOrdiniPageModule {}
