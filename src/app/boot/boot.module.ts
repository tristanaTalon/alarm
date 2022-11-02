import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ComponentsLibraryModule } from '../shared/modules/components-library/components-library.module';
import { BootRoutingModule } from './boot-routing.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    BootRoutingModule,
    ComponentsLibraryModule,
    MatToolbarModule,
    HttpClientModule,
  ],
  exports: [MenuComponent],
})
export class BootModule {}
