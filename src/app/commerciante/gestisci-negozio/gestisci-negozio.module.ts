import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestisciNegozioPageRoutingModule } from './gestisci-negozio-routing.module';

import { GestisciNegozioPage } from './gestisci-negozio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestisciNegozioPageRoutingModule
  ],
  declarations: [GestisciNegozioPage]
})
export class GestisciNegozioPageModule {}
