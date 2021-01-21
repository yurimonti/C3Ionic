import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationCorrierePageRoutingModule } from './registration-corriere-routing.module';

import { RegistrationCorrierePage } from './registration-corriere.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationCorrierePageRoutingModule
  ],
  declarations: [RegistrationCorrierePage]
})
export class RegistrationCorrierePageModule {}
