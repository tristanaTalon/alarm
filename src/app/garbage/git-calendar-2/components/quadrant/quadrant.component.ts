import { Component, Input, OnInit } from '@angular/core';
import { AxisI } from '../../models/interfaces/axis-i';
import { BoxI } from '../../models/interfaces/box-i';
import { LabelI } from '../../models/interfaces/label-i';
import { ScaleI } from '../../models/interfaces/scale-i';
import { QuadrantI } from '../../models/interfaces/quadrant-i';
import { DefaultQuadrantC } from '../../models/classes/default-quadrant-c';

@Component({
  selector: 'app-quadrant',
  templateUrl: './quadrant.component.html',
  styleUrls: ['./quadrant.component.scss'],
})
export class QuadrantComponent implements OnInit {
  @Input() quadrant!: QuadrantI;

  constructor() {
    this.quadrant = new DefaultQuadrantC().getQuadrant();
  }

  ngOnInit(): void {}

  getValuesOfXAxis(): number[] {
    const x = this.quadrant.xAxis.size;
    const xArray: number[] = [];
    for (let i = 0; i <= x; i++) {
      xArray.push(i);
    }
    return xArray;
  }

  getValuesOfYAxis(): number[] {
    const y = this.quadrant.yAxis.size;
    const yArray: number[] = [];
    for (let i = 0; i < y + 1; i++) {
      yArray.push(i);
    }
    return yArray;
  }

  isThereABox(x: number, y: number): boolean {
    const boxes = this.quadrant.boxes;
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].x === x && boxes[i].y === y) {
        return true;
      }
    }
    return false;
  }

  getBox(x: number, y: number): BoxI | undefined {
    const boxes = this.quadrant.boxes;
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].x == x && boxes[i].y == y) {
        return boxes[i];
      }
    }
    return undefined;
  }

  getLabelOfXAxis(position: number): LabelI | undefined {
    const labels = this.quadrant.xAxis.labels;

    for (let i = 0; i < labels.length; i++) {
      const label = labels[i];
      if (label.position == position) {
        return label;
      }
    }
    return undefined;
  }

  getLabelOfYAxis(position: number): LabelI | undefined {
    const labels = this.quadrant.yAxis.labels;

    for (let i = 0; i < labels.length; i++) {
      const label = labels[i];
      if (label.position == position) {
        return label;
      }
    }
    return undefined;
  }
}
