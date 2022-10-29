import { Component, Input, OnInit } from '@angular/core';
import { TimeC } from '../../classes/time-c';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss'],
})
export class TimeComponent implements OnInit {
  @Input() time!: TimeC;

  constructor() {}

  ngOnInit(): void {}

  show() {
    console.log(this.time);
  }
}
