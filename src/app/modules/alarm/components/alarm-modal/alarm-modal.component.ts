import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlarmC } from '../../classes/alarm-c';
import { AlarmResponse } from '../../classes/alarm-response';

@Component({
  selector: 'app-alarm-modal',
  templateUrl: './alarm-modal.component.html',
  styleUrls: ['./alarm-modal.component.scss'],
})
export class AlarmModalComponent implements OnInit {
  response!: AlarmResponse;

  alarmAux!: AlarmC;

  constructor(
    public dialogRef: MatDialogRef<AlarmModalComponent>,
    @Inject(MAT_DIALOG_DATA) public alarm: AlarmC
  ) {
    // console.log("antes::",this.alarm)
    this.response = new AlarmResponse(this.alarm);
  }

  ngOnInit(): void {
    this.alarmAux = this.alarm;
    console.log('before::', this.alarmAux);
  }

  accept() {
    this.response.setDone(true);
    this.dialogRef.close(this.response);
  }

  cancel() {
    this.dialogRef.close(this.response);
  }

  show() {
    // console.log(this.alarm);
  }
}
