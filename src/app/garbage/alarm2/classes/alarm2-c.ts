import { Time2C } from './time2-c';
import { Week2C } from './week2-c';
import { cloneDeepWith } from 'lodash';

export class Alarm2C {
  private id: number;

  private week!: Week2C;

  private time!: Time2C;

  constructor(date: Date = new Date()) {
    this.id = -1;
    this.week = new Week2C();
    this.time = new Time2C();
    this.setByDate(date);
  }

  public setByDate(date: Date): void {
    this.week.setByDate(date);
    this.time.setByDate(date);
  }

  // time: HH:mm:ss
  public setByParams(days: number[], time: string): void {
    this.week.setByParams(days);
    this.time.setByParams(time);
  }

  public setId(id: number): void {
    this.id = id;
  }

  public getId(): number {
    return this.id;
  }

  public cloned(): Alarm2C {
    return this;
  }

  public getTime(): Time2C {
    return this.time;
  }

  public getWeek(): Week2C {
    return this.week;
  }

  public static cloned(alarm: Alarm2C): Alarm2C {
    return cloneDeepWith(alarm);
  }
}
