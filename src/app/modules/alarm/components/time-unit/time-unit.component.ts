import { Component, Input, OnInit } from '@angular/core';
import { UnitTimeC } from '../../classes/unit-time-c';

@Component({
  selector: 'app-time-unit',
  templateUrl: './time-unit.component.html',
  styleUrls: ['./time-unit.component.scss'],
})
export class TimeUnitComponent implements OnInit {
  @Input() timeUnit!: UnitTimeC;
  constructor() {}

  ngOnInit(): void {}

  change($event: any) {
    console.log($event.target.value);
    this.timeUnit.setValue(Number($event.target.value));
  }

  show() {
    console.log(this.timeUnit);
  }
}
