import { Alarm2C } from './alarm2-c';
import { InputAlarmI } from '../interfaces/input-alarm-i';

export class AlarmListC {
  private alarmList!: Alarm2C[];

  constructor(alarmList: Alarm2C[] = []) {
    this.alarmList = alarmList;
  }

  public add(alarm: Alarm2C): void {
    alarm.setId(this.createId());
    this.alarmList.unshift(alarm);
  }

  public update(alarm: Alarm2C): void {
    this.alarmList.splice(this.position(alarm.getId()), 1, alarm);
  }

  private position(id: number): number {
    return this.alarmList.findIndex((alarm: Alarm2C) => alarm.getId() == id);
  }

  public delete(id: number): void {
    this.alarmList.splice(this.position(id), 1);
  }

  public show(): void {
    console.log(this.alarmList);
  }

  public getAlarmList(): Alarm2C[] {
    return this.alarmList;
  }

  private createId(): number {
    let highest: number = -1;
    for (let i = 0; i < this.alarmList.length; i++)
      if (highest < this.alarmList[i].getId())
        highest = this.alarmList[i].getId();
    return highest + 1;
  }

  public setByParams(alarmList: InputAlarmI[]): void {
    alarmList.forEach((alarm: InputAlarmI) => {
      const newAlarm = new Alarm2C();
      newAlarm.setByParams(alarm.days, alarm.time);
      this.alarmList.push(newAlarm);
    });
  }
}
