import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Alarm2C } from '../../classes/alarm2-c';
import { MatDialog } from '@angular/material/dialog';
import { AlarmCreateUpdate2Component } from '../alarm-create-update2/alarm-create-update2.component';
import { AlarmResponse2 } from '../../classes/alarm-response2-c';
import { ConfirmComponent } from 'src/app/messages/confirm/confirm.component';
import { AlarmCreateUpdateDataI } from '../../interfaces/create-update-alarm-I';

@Component({
  selector: 'app-alarm2',
  templateUrl: './alarm2.component.html',
  styleUrls: ['./alarm2.component.scss'],
})
export class Alarm2Component implements OnInit {
  @Input() alarm!: Alarm2C;

  @Input() disabled?: boolean;

  @Output() updateO: EventEmitter<AlarmResponse2> = new EventEmitter();

  @Output() deleteO: EventEmitter<AlarmResponse2> = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  update() {
    const data: AlarmCreateUpdateDataI = {
      alarm: Alarm2C.cloned(this.alarm),
      new: false,
    };
    const dialogRef = this.dialog.open(AlarmCreateUpdate2Component, {
      data,
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((response: AlarmResponse2) => {
      this.updateO.emit(response);
    });
  }

  delete() {
    const dialogRef = this.dialog.open(ConfirmComponent);
    dialogRef.afterClosed().subscribe((response: boolean) => {
      const alarmResponse = new AlarmResponse2();
      alarmResponse.setByParams(this.alarm, response);
      this.deleteO.emit(alarmResponse);
    });
  }
}
