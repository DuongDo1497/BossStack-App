import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageCashPage } from './manage-cash.page';

const routes: Routes = [
  {
    path: '',
    component: ManageCashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageCashPageRoutingModule {}
