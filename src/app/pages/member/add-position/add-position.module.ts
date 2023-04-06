import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPositionPageRoutingModule } from './add-position-routing.module';

import { AddPositionPage } from './add-position.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPositionPageRoutingModule
  ],
  declarations: [AddPositionPage]
})
export class AddPositionPageModule {}
