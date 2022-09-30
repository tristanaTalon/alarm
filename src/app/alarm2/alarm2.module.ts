import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { Alarm2Component } from './components/alarm2/alarm2.component';
import { AlarmList2Component } from './components/alarm-list2/alarm-list2.component';
import { Time2Component } from './components/time2/time2.component';
import { Week2Component } from './components/week2/week2.component';
import { AlarmCreateUpdate2Component } from './components/alarm-create-update2/alarm-create-update2.component';
import { MessagesModule } from '../messages/messages.module';
import { Routes, RouterModule } from '@angular/router';
import { PageMainComponent } from './testing-pages/page-main/page-main.component';
import { PageApiComponent } from './testing-pages/page-api/page-api.component';
import { PageExampleComponent } from './testing-pages/page-example/page-example.component';

const routes: Routes = [
  {
    path: '',
    component: PageMainComponent,
  },
];

@NgModule({
  declarations: [
    Alarm2Component,
    AlarmList2Component,
    Time2Component,
    Week2Component,
    AlarmCreateUpdate2Component,
    PageMainComponent,
    PageApiComponent,
    PageExampleComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    MessagesModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
})
export class Alarm2Module {}
