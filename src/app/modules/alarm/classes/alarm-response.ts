import { AlarmC } from './alarm-c';

export class AlarmResponse {
  private alarmA!: AlarmC;
  private doneA!: boolean;

  constructor(alarm: AlarmC, done: boolean = false) {
    this.alarmA = alarm;
    this.doneA = done;
  }

  public alarm(): AlarmC {
    return this.alarmA;
  }

  public done(): boolean {
    return this.doneA;
  }

  public setDone(done: boolean): void {
    this.doneA = done;
  }
}
