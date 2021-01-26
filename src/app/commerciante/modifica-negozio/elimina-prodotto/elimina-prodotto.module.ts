import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminaProdottoPageRoutingModule } from './elimina-prodotto-routing.module';

import { EliminaProdottoPage } from './elimina-prodotto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminaProdottoPageRoutingModule
  ],
  declarations: [EliminaProdottoPage]
})
export class EliminaProdottoPageModule {}
