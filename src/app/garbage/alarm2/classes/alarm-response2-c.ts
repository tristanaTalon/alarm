import { Alarm2C } from './alarm2-c';

export class AlarmResponse2 {
  private alarm!: Alarm2C;

  private done!: boolean;

  constructor() {
    this.alarm = new Alarm2C();
    this.done = false;
  }

  setByParams(alarm: Alarm2C, done: boolean) {
    this.alarm = alarm;
    this.done = done;
  }

  public getAlarm(): Alarm2C {
    return this.alarm;
  }

  public getDone(): boolean {
    return this.done;
  }

  public setDone(done: boolean): void {
    this.done = done;
  }
}
