import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotGoodPageRoutingModule } from './not-good-routing.module';

import { NotGoodPage } from './not-good.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotGoodPageRoutingModule
  ],
  declarations: [NotGoodPage]
})
export class NotGoodPageModule {}
