import { Component, OnInit } from '@angular/core';
import { CoordinateC } from '../../models/classes/coordinate';
import { lineListC } from '../../models/classes/line-list';
import { StructureC } from '../../models/classes/structure';
import { LineC } from '../../models/classes/line';
import { ScaleC } from '../../models/classes/scale';
import { ScaleListC } from '../../models/classes/scale-list';
import { BoxListC } from '../../models/classes/box-list';
import { BoxC } from '../../models/classes/box';
import { ShapeC } from '../../models/classes/shape';

@Component({
  selector: 'app-quadrant',
  templateUrl: './quadrant.component.html',
  styleUrls: ['./quadrant.component.scss'],
})
export class QuadrantComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  getCoordinate(): CoordinateC {
    return new CoordinateC(0, 0);
  }

  getStructure(): StructureC {
    const week1 = new LineC('y', 0, '1 week');
    const week2 = new LineC('y', 1, '2 week');
    const week3 = new LineC('y', 2, '3 week');
    const week4 = new LineC('y', 3, '4 week');

    const monday = new LineC('x', 0, 'Monday');
    const tuesday = new LineC('x', 1, 'Tuesday');
    const wednesday = new LineC('x', 2, 'Wednesday');
    const thursday = new LineC('x', 3, 'Thursday');
    const friday = new LineC('x', 3, 'friday');

    const lineXList = [monday, tuesday, wednesday, thursday, friday];
    const lineYList = [week1, week2, week3, week4];
    const structure = new StructureC(lineXList, lineYList);
    return structure;
  }

  getScaleList(): ScaleListC {
    return new ScaleListC(4, '#FFFFF');
  }

  getBoxList(): BoxListC {
    const shape = new ShapeC();

    const box1 = new BoxC(
      shape,
      new CoordinateC(0, 0),
      this.getScaleList().getScales()[0],
      'box 1'
    );

    const box2 = new BoxC(
      shape,
      new CoordinateC(1, 1),
      this.getScaleList().getScales()[1],
      'box 1'
    );

    return new BoxListC(18, [box1, box2]);
  }
}
