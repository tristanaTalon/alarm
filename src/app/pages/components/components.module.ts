import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { PageComponentsComponent } from './page-components/page-components.component';

@NgModule({
  declarations: [PageComponentsComponent],
  imports: [CommonModule, ComponentsRoutingModule],
  bootstrap: [],
  entryComponents: [PageComponentsComponent],
})
export class ComponentsModule {}
