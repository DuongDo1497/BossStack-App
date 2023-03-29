import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlowCashPageRoutingModule } from './flow-cash-routing.module';

import { FlowCashPage } from './flow-cash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlowCashPageRoutingModule
  ],
  declarations: [FlowCashPage]
})
export class FlowCashPageModule {}
