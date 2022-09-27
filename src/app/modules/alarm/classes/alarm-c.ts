import { TimeC } from './time-c';
import { WeekC } from './week-c';

export class AlarmC {
  private idA!: number;

  private weekA!: WeekC;

  private timeA!: TimeC;

  constructor(week: WeekC = new WeekC(), time: TimeC = new TimeC()) {
    this.idA = -1;
    this.weekA = week;
    this.timeA = time;
  }

  public id(): number {
    return this.idA;
  }

  public setId(id: number): void {
    this.idA = id;
  }

  public week(): WeekC {
    return this.weekA;
  }

  public time(): TimeC {
    return this.timeA;
  }

  public update(week: WeekC, time: TimeC): void {
    this.weekA = week;
    this.timeA = time;
  }

  public alarm(): AlarmC {
    return this;
  }

  public static cloned(alarm: AlarmC): AlarmC {
    return JSON.parse(JSON.stringify(alarm))
  }
}
