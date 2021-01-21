import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControllaOrdiniPageRoutingModule } from './controlla-ordini-routing.module';

import { ControllaOrdiniPage } from './controlla-ordini.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControllaOrdiniPageRoutingModule
  ],
  declarations: [ControllaOrdiniPage]
})
export class ControllaOrdiniPageModule {}
