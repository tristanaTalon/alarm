import { Component, Input, OnInit } from '@angular/core';
import { MatChip, MatChipListChange } from '@angular/material/chips';
import { Week2C } from '../../classes/week2-c';

@Component({
  selector: 'app-week2',
  templateUrl: './week2.component.html',
  styleUrls: ['./week2.component.scss'],
})
export class Week2Component implements OnInit {
  @Input() week!: Week2C;

  @Input() disabled?: boolean;

  daysInEnglish = Week2C.daysInEnglish;

  constructor() {
    Week2C.daysInEnglish;
  }

  ngOnInit(): void {}

  toggleSelection(chip: MatChip, index: number) {
    chip.toggleSelected();
    this.week.toggleDay(index);
  }

  isSelected(index: number): boolean {
    return this.week.included(index);
  }

  show() {
    console.log(this.week);
  }
}
