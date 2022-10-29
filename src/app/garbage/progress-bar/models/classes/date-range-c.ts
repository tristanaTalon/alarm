import { cloneDeepWith } from 'lodash';
import { DateC } from './date-c';

export class DateRangeC {
  private start!: DateC;
  private end!: DateC;

  constructor(start: Date, end: Date) {
    this.start = new DateC(start);
    this.end = new DateC(end);
  }

  public ignoreTime() {
    this.start.ignorateTime();
    this.end.ignorateTime();
  }

  public formated(): string {
    if (this.start.inSameYear(this.end)) {
      return this.getFormatedInAYear();
    }

    return this.getFormatedInManyYears();
  }

  private getFormatedInAYear(): string {
    return (
      this.start.formatedWithOutYear() + ' - ' + this.end.formatedWithOutYear()
    );
  }

  private getFormatedInManyYears(): string {
    return this.start.formatedWithYear() + ' - ' + this.end.formatedWithYear();
  }

  public porcentProgressUntilNow(): number {
    const now = this.getNowDateWithIgnoratedTime();
    const passedDayUntilNow = this.start.differenceOfDays(now);
    if (this.length() == 0) return 100;
    return (passedDayUntilNow / this.length()) * 100;
  }

  private getNowDateWithIgnoratedTime(): DateC {
    const now: DateC = new DateC(new Date());
    now.ignorateTime();
    return now;
  }

  public length(): number {
    return this.start.differenceOfDays(this.end);
  }
}
