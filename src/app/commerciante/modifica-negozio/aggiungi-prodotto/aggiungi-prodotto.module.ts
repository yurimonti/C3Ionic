import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AggiungiProdottoPageRoutingModule } from './aggiungi-prodotto-routing.module';

import { AggiungiProdottoPage } from './aggiungi-prodotto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AggiungiProdottoPageRoutingModule
  ],
  declarations: [AggiungiProdottoPage]
})
export class AggiungiProdottoPageModule {}
