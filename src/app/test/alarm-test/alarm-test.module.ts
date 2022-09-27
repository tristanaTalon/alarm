import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlarmTestComponent } from './alarm-test/alarm-test.component';
import { AlarmModule } from '../../modules/alarm/alarm.module';

@NgModule({
  declarations: [AlarmTestComponent],
  imports: [CommonModule, AlarmModule],
  exports: [AlarmTestComponent],
})
export class AlarmTestModule {}
