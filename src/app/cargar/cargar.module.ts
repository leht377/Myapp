import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CargarPageRoutingModule } from './cargar-routing.module';

import { CargarPage } from './cargar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CargarPageRoutingModule
  ],
  declarations: [CargarPage]
})
export class CargarPageModule {}
