import { LineC } from './line';

export class StructureC {
  private lineXList!: LineC[];

  private lineYList!: LineC[];

  // private direction!: string;

  constructor(lineXList: LineC[], lineYList: LineC[]) {
    this.lineXList = lineXList;
    this.lineYList = lineYList;
  }
}
