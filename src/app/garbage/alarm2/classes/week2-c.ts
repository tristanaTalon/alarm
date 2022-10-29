export class Week2C {
  private days!: number[];

  constructor() {
    this.days = [];
  }

  public static daysInEnglish = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  public static numberOfDays = 7;

  public setByDate(date: Date): void {
    this.days.push(date.getDay());
  }

  public setByParams(days: number[]): void {
    this.days = days;
  }

  private addDay(day: number): void {
    this.days.push(day);
  }

  private removeDay(day: number): void {
    const dayPosition = this.dayPosition(day);
    this.days.splice(dayPosition, 1);
  }

  private dayPosition(day: number): number {
    return this.days.findIndex((e: number) => e == day);
  }

  public toggleDay(day: number): void {
    if (this.included(day)) {
      this.removeDay(day);
    } else {
      this.addDay(day);
    }
  }

  public included(day: number): boolean {
    return this.days.includes(day);
  }
}
