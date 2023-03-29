import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlowCashPage } from './flow-cash.page';

const routes: Routes = [
  {
    path: '',
    component: FlowCashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlowCashPageRoutingModule {}
