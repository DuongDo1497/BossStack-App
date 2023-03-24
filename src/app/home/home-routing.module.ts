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
        path: 'notification',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/notification/notification.module').then(
                (m) => m.NotificationPageModule
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

      // Cash plan page
      {
        path: 'plan-cash',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/plan-cash/plan-cash.module').then(
                (m) => m.PlanCashPageModule
              ),
          },
        ],
      },
      {
        path: 'plan-cash/list',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/plan-cash/list/list.module').then(
                (m) => m.ListPageModule
              ),
          },
        ],
      },
      {
        path: 'plan-cash/add',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/plan-cash/add/add.module').then(
                (m) => m.AddPageModule
              ),
          },
        ],
      },
      {
        path: 'plan-cash/edit',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/plan-cash/edit/edit.module').then(
                (m) => m.EditPageModule
              ),
          },
        ],
      },
      {
        path: 'plan-cash/detail',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/plan-cash/detail/detail.module').then(
                (m) => m.DetailPageModule
              ),
          },
        ],
      },
      // End Cash plan page

      // History page
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
      // End History page

      // Member page
      {
        path: 'member',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/member/member.module').then(
                (m) => m.MemberPageModule
              ),
          },
        ],
      },
      {
        path: 'member/add',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/member/add/add.module').then(
                (m) => m.AddPageModule
              ),
          },
        ],
      },
      //End Member page

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
