import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanCashPageRoutingModule } from './plan-cash-routing.module';

import { PlanCashPage } from './plan-cash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanCashPageRoutingModule
  ],
  declarations: [PlanCashPage]
})
export class PlanCashPageModule {}
