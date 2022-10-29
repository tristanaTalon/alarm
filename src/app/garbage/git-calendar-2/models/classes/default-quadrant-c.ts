import { ScaleI } from '../interfaces/scale-i';
import { AxisI } from '../interfaces/axis-i';
import { BoxI } from '../interfaces/box-i';
import { QuadrantI } from '../interfaces/quadrant-i';

export class DefaultQuadrantC {
  constructor() {}

  private getScales(): ScaleI[] {
    const colors = ['rgb(190,190,190)', 'rgb(140,140,140)', 'rgb(100,100,100)'];
    const scales: ScaleI[] = [];
    for (let i = 0; i < colors.length; i++) {
      scales.push({ color: colors[i], repeatedAmount: i + 1 });
    }
    return scales;
  }

  private getXAxis(): AxisI {
    const monthWeeks = 4;
    return {
      size: 48,
      labels: [
        { description: 'Jan', position: 1 },
        { description: 'Feb', position: monthWeeks * 1 },
        { description: 'Mar', position: monthWeeks * 2 },
        { description: 'Apr', position: monthWeeks * 3 },
        { description: 'May', position: monthWeeks * 4 },
        { description: 'Jun', position: monthWeeks * 5 },
        { description: 'Jul', position: monthWeeks * 6 },
        { description: 'Ago', position: monthWeeks * 7 },
        { description: 'Set', position: monthWeeks * 8 },
        { description: 'Oct', position: monthWeeks * 9 },
        { description: 'Nov', position: monthWeeks * 10 },
        { description: 'Dec', position: monthWeeks * 11 },
      ],
    };
  }

  private getYAxis(): AxisI {
    return {
      size: 7,
      labels: [
        { description: 'Sun', position: 1 },
        { description: 'Mon', position: 2 },
        { description: 'Tue', position: 3 },
        { description: 'Wed', position: 4 },
        { description: 'Thu', position: 5 },
        { description: 'Fri', position: 6 },
        { description: 'Sat', position: 7 },
      ],
    };
  }

  private getBoxes(): BoxI[] {
    return [
      { x: 1, y: 1, repeatedAmount: 1, description: 'description 1' },
      { x: 2, y: 2, repeatedAmount: 2, description: 'description 2' },
      { x: 3, y: 3, repeatedAmount: 3, description: 'description 3' },
      { x: 4, y: 4, repeatedAmount: 4, description: 'description 4' },
      { x: 5, y: 5, repeatedAmount: 5, description: 'description 5' },
      { x: 6, y: 6, repeatedAmount: 6, description: 'description 6' },
      { x: 7, y: 7, repeatedAmount: 7, description: 'description 7' },
    ];
  }

  public getQuadrant(): QuadrantI {
    return {
      xAxis: this.getXAxis(),

      yAxis: this.getYAxis(),

      scales: this.getScales(),

      boxes: this.getBoxes(),
    };
  }
}
