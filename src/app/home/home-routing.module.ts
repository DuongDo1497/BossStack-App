import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'radio',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/radio/radio.module').then(
                (m) => m.RadioPageModule
              ),
          },
        ],
      },
      {
        path: 'library',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/library/library.module').then(
                (m) => m.LibraryPageModule
              ),
          },
        ],
      },
      {
        path: 'search',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/search/search.module').then(
                (m) => m.SearchPageModule
              ),
          },
        ],
      },
      {
        path: '',
        redirectTo: 'radio',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'radio',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
