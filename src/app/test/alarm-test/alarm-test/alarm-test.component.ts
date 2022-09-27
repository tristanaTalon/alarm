import { Component, OnInit } from '@angular/core';
import { AlarmListC } from '../../../modules/alarm/classes/alarm-list.c';

@Component({
  selector: 'app-alarm-test',
  templateUrl: './alarm-test.component.html',
  styleUrls: ['./alarm-test.component.scss']
})
export class AlarmTestComponent implements OnInit {

  alarmList!:AlarmListC

  constructor() { 
    this.alarmList = new AlarmListC()
  }

  ngOnInit(): void {
  }

}
