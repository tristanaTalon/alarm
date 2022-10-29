import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadComponent } from './components/load/load.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  declarations: [LoadComponent, ConfirmComponent],
  imports: [CommonModule, AngularMaterialModule],
  exports: [LoadComponent, ConfirmComponent],
})
export class MessagesModule {}
