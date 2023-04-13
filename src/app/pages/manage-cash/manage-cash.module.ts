import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageCashPageRoutingModule } from './manage-cash-routing.module';

import { ManageCashPage } from './manage-cash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageCashPageRoutingModule
  ],
  declarations: [ManageCashPage]
})
export class ManageCashPageModule {}
