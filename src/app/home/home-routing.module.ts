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

      // Approve
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
        path: 'approve/detail',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/approve/detail/detail.module').then(
                (m) => m.DetailPageModule
              ),
          },
        ],
      },
      {
        path: 'approve/detail-expense',
        children: [
          {
            path: '',
            loadChildren: () =>
              import(
                '../pages/approve/detail-expense/detail-expense.module'
              ).then((m) => m.DetailExpensePageModule),
          },
        ],
      },
      // Approve

      // Task
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
        path: 'task/add',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/task/add/add.module').then(
                (m) => m.AddPageModule
              ),
          },
        ],
      },
      {
        path: 'task/list/job',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/task/list/job/job.module').then(
                (m) => m.JobPageModule
              ),
          },
        ],
      },
      {
        path: 'task/detail/project',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/task/detail/project/project.module').then(
                (m) => m.ProjectPageModule
              ),
          },
        ],
      },
      {
        path: 'task/detail/job',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/task/detail/job/job.module').then(
                (m) => m.JobPageModule
              ),
          },
        ],
      },
      // End Task

      // Noti
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
      // Noti

      // Personal
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
      {
        path: 'personal/info',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/personal/info/info.module').then(
                (m) => m.InfoPageModule
              ),
          },
        ],
      },
      {
        path: 'personal/change-password',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/personal/password/password.module').then(
                (m) => m.PasswordPageModule
              ),
          },
        ],
      },
      // Personal
      // End page tab

      // Business overview page
      {
        path: 'business-overview',
        children: [
          {
            path: '',
            loadChildren: () =>
              import(
                '../pages/business-overview/business-overview.module'
              ).then((m) => m.BusinessOverviewPageModule),
          },
        ],
      },
      // End Business overview page

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
      {
        path: 'plan-cash/transfer',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/plan-cash/transfer/transfer.module').then(
                (m) => m.TransferPageModule
              ),
          },
        ],
      },
      {
        path: 'plan-cash/noti',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/plan-cash/noti/noti.module').then(
                (m) => m.NotiPageModule
              ),
          },
        ],
      },
      // End Cash plan page

      // Cash manage page
      {
        path: 'cash-manage',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/manage-cash/manage-cash.module').then(
                (m) => m.ManageCashPageModule
              ),
          },
        ],
      },
      {
        path: 'cash-manage/add',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/manage-cash/add/add.module').then(
                (m) => m.AddPageModule
              ),
          },
        ],
      },
      {
        path: 'cash-manage/add/collect',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/manage-cash/add/collect/collect.module').then(
                (m) => m.CollectPageModule
              ),
          },
        ],
      },
      {
        path: 'cash-manage/add/spend',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/manage-cash/add/spend/spend.module').then(
                (m) => m.SpendPageModule
              ),
          },
        ],
      },
      {
        path: 'cash-manage/transfer',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/manage-cash/transfer/transfer.module').then(
                (m) => m.TransferPageModule
              ),
          },
        ],
      },
      {
        path: 'cash-manage/transfer/noti',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/manage-cash/noti/noti.module').then(
                (m) => m.NotiPageModule
              ),
          },
        ],
      },
      // End Cash manage page

      // Cash transfer page
      {
        path: 'cash-transfer',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/transfer-cash/transfer-cash.module').then(
                (m) => m.TransferCashPageModule
              ),
          },
        ],
      },
      {
        path: 'cash-transfer/add',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/transfer-cash/add/add.module').then(
                (m) => m.AddPageModule
              ),
          },
        ],
      },
      {
        path: 'cash-transfer/add/collect',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/transfer-cash/add/collect/collect.module').then(
                (m) => m.CollectPageModule
              ),
          },
        ],
      },
      {
        path: 'cash-transfer/add/spend',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/transfer-cash/add/spend/spend.module').then(
                (m) => m.SpendPageModule
              ),
          },
        ],
      },
      {
        path: 'cash-transfer/list',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/transfer-cash/list/list.module').then(
                (m) => m.ListPageModule
              ),
          },
        ],
      },
      {
        path: 'cash-transfer/detail',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/transfer-cash/detail/detail.module').then(
                (m) => m.DetailPageModule
              ),
          },
        ],
      },
      {
        path: 'cash-transfer/edit',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/transfer-cash/edit/edit.module').then(
                (m) => m.EditPageModule
              ),
          },
        ],
      },
      {
        path: 'cash-transfer/history',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/transfer-cash/history/history.module').then(
                (m) => m.HistoryPageModule
              ),
          },
        ],
      },
      // End Cash transfer page

      // Business Active
      {
        path: 'business-active/step1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/business-active/step1/step1.module').then(
                (m) => m.Step1PageModule
              ),
          },
        ],
      },
      {
        path: 'business-active/step2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/business-active/step2/step2.module').then(
                (m) => m.Step2PageModule
              ),
          },
        ],
      },
      {
        path: 'business-active/result',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/business-active/result/result.module').then(
                (m) => m.ResultPageModule
              ),
          },
        ],
      },
      {
        path: 'business-active/history',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/business-active/history/history.module').then(
                (m) => m.HistoryPageModule
              ),
          },
        ],
      },
      // End Business Active

      // Cash flow page
      {
        path: 'flow-cash',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/flow-cash/flow-cash.module').then(
                (m) => m.FlowCashPageModule
              ),
          },
        ],
      },
      {
        path: 'flow-cash/list',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/flow-cash/list/list.module').then(
                (m) => m.ListPageModule
              ),
          },
        ],
      },
      {
        path: 'flow-cash/status/done',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/flow-cash/status/done/done.module').then(
                (m) => m.DonePageModule
              ),
          },
        ],
      },
      {
        path: 'flow-cash/status/good',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/flow-cash/status/good/good.module').then(
                (m) => m.GoodPageModule
              ),
          },
        ],
      },
      {
        path: 'flow-cash/status/not-good',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/flow-cash/status/not-good/not-good.module').then(
                (m) => m.NotGoodPageModule
              ),
          },
        ],
      },
      // End Cash flow page

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

      // Workflow page
      {
        path: 'flow-work',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/flow-work/flow-work.module').then(
                (m) => m.FlowWorkPageModule
              ),
          },
        ],
      },
      {
        path: 'flow-work/add',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/flow-work/add/add.module').then(
                (m) => m.AddPageModule
              ),
          },
        ],
      },
      {
        path: 'flow-work/list',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/flow-work/list/list.module').then(
                (m) => m.ListPageModule
              ),
          },
        ],
      },
      {
        path: 'flow-work/status/done',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/flow-work/status/done/done.module').then(
                (m) => m.DonePageModule
              ),
          },
        ],
      },
      {
        path: 'flow-work/status/good',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/flow-work/status/good/good.module').then(
                (m) => m.GoodPageModule
              ),
          },
        ],
      },
      {
        path: 'flow-work/status/not-good',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/flow-work/status/not-good/not-good.module').then(
                (m) => m.NotGoodPageModule
              ),
          },
        ],
      },
      {
        path: 'flow-work/detail',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/flow-work/detail/detail.module').then(
                (m) => m.DetailPageModule
              ),
          },
        ],
      },
      {
        path: 'flow-work/edit',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/flow-work/edit/edit.module').then(
                (m) => m.EditPageModule
              ),
          },
        ],
      },
      // End Workflow page

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
      {
        path: 'member/add-position',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/member/add-position/add-position.module').then(
                (m) => m.AddPositionPageModule
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
