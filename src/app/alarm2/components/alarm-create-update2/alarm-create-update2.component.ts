import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlarmModalComponent } from 'src/app/alarm/components/alarm-modal/alarm-modal.component';
import { AlarmResponse2 } from '../../classes/alarm-response2-c';
import { Alarm2C } from '../../classes/alarm2-c';
import { AlarmCreateUpdateDataI } from '../../interfaces/create-update-alarm-I';

@Component({
  selector: 'app-alarm-create-update2',
  templateUrl: './alarm-create-update2.component.html',
  styleUrls: ['./alarm-create-update2.component.scss'],
})
export class AlarmCreateUpdate2Component implements OnInit {
  @Input() alarmAux!: Alarm2C;

  response!: AlarmResponse2;

  title = 'asdf';

  constructor(
    public dialogRef: MatDialogRef<AlarmModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AlarmCreateUpdateDataI
  ) {
    this.response = new AlarmResponse2();
    this.response.setByParams(this.data.alarm, false);
    this.data.new
      ? (this.title = 'New schedule')
      : (this.title = 'Update schedule');
  }

  ngOnInit(): void {
    this.alarmAux = this.data.alarm;
  }

  cancel(): void {
    this.dialogRef.close(this.response);
  }

  accept(): void {
    this.response.setDone(true);
    this.dialogRef.close(this.response);
  }

  show(): void {
    console.log(this.response);
  }
}
