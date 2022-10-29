import { CoordinateC } from './coordinate';
import { StructureC } from './structure';
import { ScaleListC } from './scale-list';
import { BoxListC } from './box-list';

export class QuadrantC {
  private coordinate!: CoordinateC;

  private structure!: StructureC;

  private scaleList!: ScaleListC;

  private boxList!: BoxListC;

  constructor(
    coordinate: CoordinateC,
    structure: StructureC,
    scaleList: ScaleListC,
    boxList: BoxListC
  ) {
    this.coordinate = coordinate;
    this.structure = structure;
    this.scaleList = scaleList;
    this.boxList = boxList;
  }
}
