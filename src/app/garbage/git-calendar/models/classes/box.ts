import { CoordinateC } from './coordinate';
import { ScaleC } from './scale';
import { ShapeC } from './shape';

export class BoxC {
  private shape!: ShapeC;

  private coordinate!: CoordinateC;

  private scale!: ScaleC;

  private label!: string;

  constructor(
    shape: ShapeC,
    coordinate: CoordinateC,
    scale: ScaleC,
    label: string
  ) {
    this.shape = shape;
    this.coordinate = coordinate;
    this.scale = scale;
    this.label = label;
  }
}
