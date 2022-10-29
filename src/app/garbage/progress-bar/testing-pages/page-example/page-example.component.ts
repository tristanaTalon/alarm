import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateRangeC } from '../../models/classes/date-range-c';

@Component({
  selector: 'app-page-example',
  templateUrl: './page-example.component.html',
  styleUrls: ['./page-example.component.scss'],
})
export class PageExampleComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl(new Date()),
    end: new FormControl(new Date()),
  });

  dateRange!: DateRangeC;

  constructor() {}

  ngOnInit(): void {this.dateRange = new DateRangeC(
    this.range.value.start,
    this.range.value.end
  );}

  show() {
    console.log(this.range.value.start);
    console.log(this.range.value.end);
  }

  //each time change date you must assign new daterange
  assign() {
    this.dateRange = new DateRangeC(
      this.range.value.start,
      this.range.value.end
    );
    console.log(this.dateRange);
  }

  change() {
    console.log('changing');
  }
}
