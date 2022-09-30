import { Axis } from './axis';
import { Box } from './box';
import { Scale } from './scale';

export class Table {
  private scaleList!: Scale[];

  private axisList!: Axis[];

  private boxList!: Box[];

  private name!: string;

  constructor() {}
}
