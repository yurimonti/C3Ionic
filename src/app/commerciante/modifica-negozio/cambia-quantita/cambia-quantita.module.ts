import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiaQuantitaPageRoutingModule } from './cambia-quantita-routing.module';

import { CambiaQuantitaPage } from './cambia-quantita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiaQuantitaPageRoutingModule
  ],
  declarations: [CambiaQuantitaPage]
})
export class CambiaQuantitaPageModule {}
