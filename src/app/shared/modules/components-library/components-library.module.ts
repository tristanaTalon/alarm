import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { SelectComponent } from './components/select/select.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ButtonComponent, SelectComponent],
  imports: [CommonModule, HttpClientModule, AngularMaterialModule],
  exports: [ButtonComponent, SelectComponent],
})
export class ComponentsLibraryModule {}
