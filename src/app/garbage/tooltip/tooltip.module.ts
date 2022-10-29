import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageMainComponent } from './testing-pages/page-main/page-main.component';
import { Routes, RouterModule } from '@angular/router';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

const routes: Routes = [
  {
    path: '',
    component: PageMainComponent,
  },
];
@NgModule({
  declarations: [PageMainComponent, TooltipComponent],
  imports: [CommonModule, AngularMaterialModule, RouterModule.forChild(routes)],
  providers: [],
})
export class TooltipModule {}
