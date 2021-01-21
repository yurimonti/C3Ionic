import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationClientePageRoutingModule } from './registration-cliente-routing.module';

import { RegistrationClientePage } from './registration-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationClientePageRoutingModule
  ],
  declarations: [RegistrationClientePage]
})
export class RegistrationClientePageModule {}
