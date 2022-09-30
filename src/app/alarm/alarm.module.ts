import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlarmComponent } from './components/alarm/alarm.component';
import { AlarmListComponent } from './components/alarm-list/alarm-list.component';
import { DayComponent } from './components/day/day.component';
import { TimeUnitComponent } from './components/time-unit/time-unit.component';
import { TimeComponent } from './components/time/time.component';
import { WeekComponent } from './components/week/week.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { AlarmModalComponent } from './components/alarm-modal/alarm-modal.component';
import { MessagesModule } from '../messages/messages.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AlarmListComponent,
  },
];

@NgModule({
  declarations: [
    TimeUnitComponent,
    TimeComponent,
    DayComponent,
    WeekComponent,
    AlarmComponent,
    AlarmListComponent,
    AlarmModalComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    MessagesModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
})
export class AlarmModule {}
