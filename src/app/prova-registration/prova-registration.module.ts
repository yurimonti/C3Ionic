import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProvaRegistrationPageRoutingModule } from './prova-registration-routing.module';

import { ProvaRegistrationPage } from './prova-registration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProvaRegistrationPageRoutingModule
  ],
  declarations: [ProvaRegistrationPage]
})
export class ProvaRegistrationPageModule {}
