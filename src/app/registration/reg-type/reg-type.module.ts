import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegTypePageRoutingModule } from './reg-type-routing.module';

import { RegTypePage } from './reg-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegTypePageRoutingModule
  ],
  declarations: [RegTypePage]
})
export class RegTypePageModule {}
