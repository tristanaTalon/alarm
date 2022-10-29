export class LineC {
  private axis!: string;

  private position!: number;

  private label!: string;

  constructor(axis: string, position: number, label: string) {
    this.axis = axis;
    this.position = position;
    this.label = label;
  }
}
