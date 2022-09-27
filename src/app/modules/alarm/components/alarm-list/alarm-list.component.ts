import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlarmC } from '../../classes/alarm-c';
import { AlarmListC } from '../../classes/alarm-list.c';
import { AlarmModalComponent } from '../alarm-modal/alarm-modal.component';
import { UnitTimeC } from '../../classes/unit-time-c';
import { TimeC } from '../../classes/time-c';
import { WeekC } from '../../classes/week-c';
import { AlarmResponse } from '../../classes/alarm-response';

@Component({
  selector: 'app-alarm-list',
  templateUrl: './alarm-list.component.html',
  styleUrls: ['./alarm-list.component.scss'],
})
export class AlarmListComponent implements OnInit {
  @Input() alarmList!: AlarmListC;

  alarmTest!: AlarmC;

  constructor(public dialog: MatDialog) {
    this.alarmList = new AlarmListC();

    const hour: UnitTimeC = new UnitTimeC('hour', 1);
    const minute: UnitTimeC = new UnitTimeC('minute', 2);
    const meridiam: UnitTimeC = new UnitTimeC('meridiam', 3);

    const time: TimeC = new TimeC(hour, minute, meridiam);

    this.alarmTest = new AlarmC();
    this.alarmTest.update(new WeekC(), time);
    console.log(this.alarmTest);
  }

  ngOnInit(): void {}

  public add() {
    const dialogRef = this.dialog.open(AlarmModalComponent, {
      data: new AlarmC(),
    });
    dialogRef.afterClosed().subscribe((response: AlarmResponse) => {
      if (response.done()) this.alarmList.add(response.alarm());
    });
  }

  public show() {
    this.alarmList.show();
  }

  delete($event: AlarmResponse) {
    console.log($event);
    if ($event.done()) {
      this.alarmList.delete($event.alarm().id());
    }
  }

  update($event: AlarmResponse) {}
}
