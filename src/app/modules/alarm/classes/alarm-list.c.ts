import { AlarmC } from './alarm-c';

export class AlarmListC {
  private alarmListA!: AlarmC[];

  constructor(alarmList: AlarmC[] = []) {
    this.alarmListA = alarmList;
  }

  public add(alarm: AlarmC): void {
    alarm.setId(this.createId());
    this.alarmListA.unshift(alarm);
  }

  public update(alarm: AlarmC): void {
    this.alarmListA.splice(this.position(alarm.id()), 1, alarm);
  }

  private position(id: number): number {
    return this.alarmListA.findIndex((alarm: AlarmC) => alarm.id() == id);
  }

  public delete(id: number): void {
    this.alarmListA.splice(this.position(id), 1);
  }

  public show(): void {
    console.log(this.alarmListA);
  }

  public alarmList(): AlarmC[] {
    return this.alarmListA;
  }

  private createId(): number {
    let highest: number = -1;
    for (let i = 0; i < this.alarmListA.length; i++)
      if (highest < this.alarmListA[i].id()) highest = this.alarmListA[i].id();
    return highest+1;
  }
}
