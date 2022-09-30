import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlarmList2Component } from './alarm2/components/alarm-list2/alarm-list2.component';
import { AlarmListComponent } from './alarm/components/alarm-list/alarm-list.component';

const routes: Routes = [
  {
    path: 'alarm',
    loadChildren: () =>
      import('./alarm/alarm.module').then((m) => m.AlarmModule),
  },
  {
    path: 'alarm2',
    loadChildren: () =>
      import('./alarm2/alarm2.module').then((m) => m.Alarm2Module),
  },
  {
    path: 'git-calendar',
    loadChildren: () =>
      import('./git-calendar/git-calendar.module').then(
        (m) => m.GitCalendarModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
