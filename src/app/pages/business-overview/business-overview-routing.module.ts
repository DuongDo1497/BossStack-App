import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessOverviewPage } from './business-overview.page';

const routes: Routes = [
  {
    path: '',
    component: BusinessOverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessOverviewPageRoutingModule {}
