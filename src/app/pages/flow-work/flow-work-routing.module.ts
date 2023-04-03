import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlowWorkPage } from './flow-work.page';

const routes: Routes = [
  {
    path: '',
    component: FlowWorkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlowWorkPageRoutingModule {}
