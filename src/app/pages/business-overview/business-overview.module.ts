import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusinessOverviewPageRoutingModule } from './business-overview-routing.module';

import { BusinessOverviewPage } from './business-overview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusinessOverviewPageRoutingModule
  ],
  declarations: [BusinessOverviewPage]
})
export class BusinessOverviewPageModule {}
