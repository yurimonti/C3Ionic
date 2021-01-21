import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegCommerciantePageRoutingModule } from './reg-commerciante-routing.module';

import { RegCommerciantePage } from './reg-commerciante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegCommerciantePageRoutingModule
  ],
  declarations: [RegCommerciantePage]
})
export class RegCommerciantePageModule {}
