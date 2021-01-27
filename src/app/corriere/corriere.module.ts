import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorrierePageRoutingModule } from './corriere-routing.module';

import { CorrierePage } from './corriere.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorrierePageRoutingModule
  ],
  declarations: [CorrierePage]
})
export class CorrierePageModule {}
