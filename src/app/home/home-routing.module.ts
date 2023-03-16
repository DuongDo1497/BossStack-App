import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      // Page tab
      {
        path: 'bs',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/bs/bs.module').then((m) => m.BsPageModule),
          },
        ],
      },
      {
        path: 'task',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/task/task.module').then((m) => m.TaskPageModule),
          },
        ],
      },
      {
        path: 'approve',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/approve/approve.module').then(
                (m) => m.ApprovePageModule
              ),
          },
        ],
      },
      {
        path: 'personal',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/personal/personal.module').then(
                (m) => m.PersonalPageModule
              ),
          },
        ],
      },
      // End page tab

      // Page
      {
        path: 'history',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/history/history.module').then(
                (m) => m.HistoryPageModule
              ),
          },
        ],
      },
      // Page

      {
        path: '',
        redirectTo: 'bs',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'bs',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
