import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanCashPage } from './plan-cash.page';

const routes: Routes = [
  {
    path: '',
    component: PlanCashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanCashPageRoutingModule {}
