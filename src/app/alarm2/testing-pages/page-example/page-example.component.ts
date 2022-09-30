import { Component, OnInit } from '@angular/core';
import { InputAlarmI } from '../../interfaces/input-alarm-i';

@Component({
  selector: 'app-page-example',
  templateUrl: './page-example.component.html',
  styleUrls: ['./page-example.component.scss'],
})
export class PageExampleComponent implements OnInit {
  alarmList!: InputAlarmI[];

  constructor() {
    this.alarmList = [
      { id: 0, days: [0, 1], time: '9:9:0' },
      { id: 1, days: [5, 6], time: '16:16:0' },
    ];
  }

  ngOnInit(): void {}
}
