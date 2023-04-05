import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotGoodPage } from './not-good.page';

const routes: Routes = [
  {
    path: '',
    component: NotGoodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotGoodPageRoutingModule {}
