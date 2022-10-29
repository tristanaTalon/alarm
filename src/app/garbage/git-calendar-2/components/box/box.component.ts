import { Component, Input, OnInit } from '@angular/core';
import { BoxI } from '../../models/interfaces/box-i';
import { ScaleI } from '../../models/interfaces/scale-i';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent implements OnInit {
  @Input() box!: BoxI | undefined;

  @Input() scales!: ScaleI[];

  constructor() {}

  ngOnInit(): void {}

  getStyle(): object {
    let color = 'rgb(235, 235, 235)';
    if (this.box) {
      const scale: ScaleI | undefined = this.scales.find(
        (scale: ScaleI) => scale.repeatedAmount === this.box?.repeatedAmount
      );
      if (scale) {
        color = scale.color;
      }
    }
    return { 'background-color': color };
  }
  show() {
    console.log(this.box);
    console.log(this.scales);
  }
}
