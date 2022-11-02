import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipRoutingModule } from './tooltip-routing.module';
import { PageExampleComponent } from './page-example/page-example.component';

@NgModule({
  declarations: [
    PageExampleComponent
  ],
  imports: [CommonModule, TooltipRoutingModule],
})
export class TooltipModule {}
