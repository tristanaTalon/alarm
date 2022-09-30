import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadComponent } from './components/load/load.component';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  declarations: [LoadComponent, ConfirmComponent],
  imports: [CommonModule],
  exports: [LoadComponent, ConfirmComponent],
})
export class MessagesModule {}
