import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { PageMainComponent } from './testing-pages/page-main/page-main.component';
import { PageApiComponent } from './testing-pages/page-api/page-api.component';
import { PageExampleComponent } from './testing-pages/page-example/page-example.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularModule } from '../angular/angular.module';
import { DateRangeC } from './models/classes/date-range-c';

const routes: Routes = [
  {
    path: '',
    component: PageMainComponent,
  },
];
@NgModule({
  declarations: [
    ProgressBarComponent,
    PageMainComponent,
    PageApiComponent,
    PageExampleComponent,
  ],
  imports: [
    AngularModule,
    AngularMaterialModule,
    // RouterModule.forChild(routes),
  ],
  exports: [ProgressBarComponent],
})
export class ProgressBarModule {}
