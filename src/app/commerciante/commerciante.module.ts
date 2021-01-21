import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommerciantePageRoutingModule } from './commerciante-routing.module';

import { CommerciantePage } from './commerciante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommerciantePageRoutingModule
  ],
  declarations: [CommerciantePage]
})
export class CommerciantePageModule {}
