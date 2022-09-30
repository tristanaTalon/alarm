import { Component, Input, OnInit } from '@angular/core';
import { WeekC } from '../../classes/week-c';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss'],
})
export class WeekComponent implements OnInit {
  @Input() week!: WeekC;

  constructor() {}

  ngOnInit(): void {}
}
