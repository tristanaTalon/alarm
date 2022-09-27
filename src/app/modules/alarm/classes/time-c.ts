import { UnitTimeC } from './unit-time-c';
export class TimeC {
  private hourA!: UnitTimeC;

  private minuteA!: UnitTimeC;

  private meridiamA!: UnitTimeC;

  constructor(
    hour: UnitTimeC = new UnitTimeC('hour'),
    minute: UnitTimeC = new UnitTimeC('minute'),
    meridiam: UnitTimeC = new UnitTimeC('meridiam')
  ) {
    this.hourA = hour;
    this.minuteA = minute;
    this.meridiamA = meridiam;
  }

  public hour(): UnitTimeC {
    return this.hourA;
  }

  public minute(): UnitTimeC {
    return this.minuteA;
  }

  public meridiam(): UnitTimeC {
    return this.meridiamA;
  }

  public setHour(hour: UnitTimeC): void {
    this.hourA = hour;
  }

  public setMinute(minute: UnitTimeC): void {
    this.minuteA = minute;
  }

  public setMeridiam(meridiam: UnitTimeC): void {
    this.meridiamA = meridiam;
  }
}
