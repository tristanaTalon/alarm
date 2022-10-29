import { format } from 'date-fns';

export class DateC {
  private date!: Date;

  public static FORMAT_WITH_YEAR: string = 'MMM. d, ′yy';

  public static FORMAT_WITHOUT_YEAR: string = 'MMM. d';

  constructor(date: Date) {
    this.date = date;
  }

  public formatedWithYear(): string {
    return format(this.date, DateC.FORMAT_WITH_YEAR);
  }

  public formatedWithOutYear(): string {
    return format(this.date, DateC.FORMAT_WITHOUT_YEAR);
  }

  public ignorateTime() {
    const month = this.date.getMonth() + 1;
    const day = this.date.getDate();
    const year = this.date.getFullYear();
    this.date = new Date(month + '/' + day + '/' + year + ' 09:09');
  }

  public differenceOfDays(higherDate: DateC): number {
    const subtracted = higherDate.getDate().getTime() - this.date.getTime();
    return Math.round(subtracted / (1000 * 60 * 60 * 24));
  }

  private getDate(): Date {
    return this.date;
  }

  public inSameYear(dateToCompare: DateC) {
    return this.date.getFullYear() == dateToCompare.getDate().getFullYear();
  }
}
