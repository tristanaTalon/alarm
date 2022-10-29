import { BoxI } from './box-i';
import { AxisI } from './axis-i';
import { ScaleI } from './scale-i';

export interface QuadrantI {
  xAxis: AxisI;

  yAxis: AxisI;

  scales: ScaleI[];

  boxes: BoxI[];
}
