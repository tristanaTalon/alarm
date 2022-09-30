import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Time2C } from '../../classes/time2-c';

@Component({
  selector: 'app-time2',
  templateUrl: './time2.component.html',
  styleUrls: ['./time2.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Time2Component implements OnInit {
  @Input() time!: Time2C;

  @Input() disabled?: boolean;

  constructor() {}

  ngOnInit(): void {}

  changedHour(value: number) {
    this.time.setHour(value);
  }

  changedMinute(value: number) {
    this.time.setMinute(value);
  }

  changedMeridiam(value: string) {
    this.time.setMeridiam(value);
  }
}
