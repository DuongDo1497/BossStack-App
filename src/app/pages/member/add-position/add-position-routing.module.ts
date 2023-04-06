import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPositionPage } from './add-position.page';

const routes: Routes = [
  {
    path: '',
    component: AddPositionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPositionPageRoutingModule {}
