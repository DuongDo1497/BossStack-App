import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransferCashPageRoutingModule } from './transfer-cash-routing.module';

import { TransferCashPage } from './transfer-cash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransferCashPageRoutingModule
  ],
  declarations: [TransferCashPage]
})
export class TransferCashPageModule {}
