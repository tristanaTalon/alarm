import { BoxC } from './box';

export class BoxListC {
  private boxes!: BoxC[];

  private limitBoxesToCreate!: number;

  constructor(limitBoxesToCreate: number, boxes: BoxC[]) {
    this.limitBoxesToCreate = limitBoxesToCreate;
    this.boxes = boxes;
  }
}
