import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./boot/boot.module').then((m) => m.BootModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// {
//   path: 'progress-bar',
//   loadChildren: () =>
//     import('./progress-bar/progress-bar.module').then(
//       (m) => m.ProgressBarModule
//     ),
// },
// {
//   path: 'alarm',
//   loadChildren: () =>
//     import('./alarm/alarm.module').then((m) => m.AlarmModule),
// },
// {
//   path: 'alarm2',
//   loadChildren: () =>
//     import('./alarm2/alarm2.module').then((m) => m.Alarm2Module),
// },
// {
//   path: 'git-calendar',
//   loadChildren: () =>
//     import('./git-calendar/git-calendar.module').then(
//       (m) => m.GitCalendarModule
//     ),
// },
// {
//   path: 'git-calendar2',
//   loadChildren: () =>
//     import('./git-calendar-2/git-calendar-2.module').then(
//       (m) => m.GitCalendar2Module
//     ),
// },
// {
//   path: 'table',
//   loadChildren: () =>
//     import('./table/table.module').then((m) => m.TableModule),
// },
// {
//   path: 'tooltip',
//   loadChildren: () =>
//     import('./tooltip/tooltip.module').then((m) => m.TooltipModule),
// },
