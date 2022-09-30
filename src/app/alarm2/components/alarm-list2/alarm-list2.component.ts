import { Component, OnInit, Input } from '@angular/core';
import { InputAlarmI } from '../../interfaces/input-alarm-i';
import { AlarmListC } from '../../classes/alarm-list2-c';
import { AlarmCreateUpdate2Component } from '../alarm-create-update2/alarm-create-update2.component';
import { MatDialog } from '@angular/material/dialog';
import { Alarm2C } from '../../classes/alarm2-c';
import { AlarmResponse2 } from '../../classes/alarm-response2-c';
import { AlarmCreateUpdateDataI } from '../../interfaces/create-update-alarm-I';

@Component({
  selector: 'app-alarm-list2',
  templateUrl: './alarm-list2.component.html',
  styleUrls: ['./alarm-list2.component.scss'],
})
export class AlarmList2Component implements OnInit {
  @Input() alarmList!: InputAlarmI[];

  alarmListAux!: AlarmListC;

  constructor(public dialog: MatDialog) {
    this.alarmListAux = new AlarmListC();
  }

  ngOnInit(): void {
    this.alarmListAux.setByParams(this.alarmList);
  }

  public add(): void {
    const data: AlarmCreateUpdateDataI = {
      alarm: new Alarm2C(new Date()),
      new: true,
    };
    const dialogRef = this.dialog.open(AlarmCreateUpdate2Component, {
      data,
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((response: AlarmResponse2) => {
      if (response.getDone()) {
        this.alarmListAux.add(response.getAlarm());
      }
    });
  }

  public update(alarmResponse: AlarmResponse2): void {
    if (alarmResponse.getDone()) {
      this.alarmListAux.update(alarmResponse.getAlarm());
    }
  }

  public delete(alarmResponse: AlarmResponse2): void {
    if (alarmResponse.getDone()) {
      this.alarmListAux.delete(alarmResponse.getAlarm().getId());
    }
  }

  public show(): void {
    console.log('**AlarmList came from out', this.alarmList);
    console.log('**AlarmList translated', this.alarmListAux);
  }
}
