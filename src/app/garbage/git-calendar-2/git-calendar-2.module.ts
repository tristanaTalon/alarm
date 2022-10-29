import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuadrantComponent } from './components/quadrant/quadrant.component';
import { BoxComponent } from './components/box/box.component';
import { PageApiComponent } from './testing-pages/page-api/page-api.component';
import { PageExampleComponent } from './testing-pages/page-example/page-example.component';
import { PageMainComponent } from './testing-pages/page-main/page-main.component';
import { Routes, RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ScalesComponent } from './components/scales/scales.component';
import { LabelComponent } from './components/label/label.component';

const routes: Routes = [
  {
    path: '',
    component: PageMainComponent,
  },
];
@NgModule({
  declarations: [
    QuadrantComponent,
    BoxComponent,
    PageApiComponent,
    PageExampleComponent,
    PageMainComponent,
    ScalesComponent,
    LabelComponent,
  ],
  imports: [CommonModule, AngularMaterialModule, RouterModule.forChild(routes)],
})
export class GitCalendar2Module {}
