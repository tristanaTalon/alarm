import { DayC } from './day-c';

export class WeekC {
  private daysA: DayC[];

  constructor() {
    this.daysA = [];
    for (let i = 0; i < 7; i++) this.daysA.push(new DayC(i));
  }

  days(): DayC[] {
    return this.daysA;
  }
}
