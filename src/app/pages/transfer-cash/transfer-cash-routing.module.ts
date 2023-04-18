import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferCashPage } from './transfer-cash.page';

const routes: Routes = [
  {
    path: '',
    component: TransferCashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferCashPageRoutingModule {}
