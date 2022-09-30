import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageMainComponent } from './testing-pages/page-main/page-main.component';
import { PageExampleComponent } from './testing-pages/page-example/page-example.component';
import { PageApiComponent } from './testing-pages/page-api/page-api.component';
import { Routes, RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { MonthComponent } from './components/month/month.component';
import { MonthListComponent } from './components/month-list/month-list.component';

const routes: Routes = [
  {
    path: '',
    component: PageMainComponent,
  },
];

@NgModule({
  declarations: [PageMainComponent, PageExampleComponent, PageApiComponent, MonthComponent, MonthListComponent],
  imports: [CommonModule, AngularMaterialModule, RouterModule.forChild(routes)],
})
export class GitCalendarModule {}
