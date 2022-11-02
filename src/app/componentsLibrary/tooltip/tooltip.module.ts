import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageMainComponent } from './testing-pages/page-main/page-main.component';
import { Routes, RouterModule } from '@angular/router';
import { TooltipComponent } from './components/tooltip/tooltip.component';

@NgModule({
  declarations: [PageMainComponent, TooltipComponent],
  imports: [CommonModule],
  providers: [],
  exports: [TooltipComponent],
})
export class TooltipModule {}
