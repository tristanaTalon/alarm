export class Time2C {
  private hour!: number;

  private minute!: number;

  private meridiam!: string;

  constructor(date: Date = new Date()) {
    this.setByDate(date);
  }

  public generatedHours(): number[] {
    const amountHours = 12;
    const numbers: number[] = [];
    for (let i = 1; i <= amountHours; i++) {
      numbers.push(i);
    }
    return numbers;
  }

  public generatedMinutes(): number[] {
    const amountMinutes = 60;
    const numbers: number[] = [];
    for (let i = 0; i < amountMinutes; i++) {
      numbers.push(i);
    }
    return numbers;
  }

  private generatedNumbers(limit: number): number[] {
    const numbers: number[] = [];
    for (let i = 0; i < limit; i++) {
      numbers.push(i);
    }
    return numbers;
  }

  public generatedMeridiams(): string[] {
    return ['AM', 'PM'];
  }

  public setByDate(date: Date): void {
    this.hour = this.getHourByDate(date);
    this.minute = this.getMinuteByDate(date);
    this.meridiam = this.getMeridiamByDate(date);
  }

  private getHourByDate(date: Date): number {
    let hour = -1;
    if (date.getHours() <= 23) {
      hour = date.getHours() - 12;
    }
    if (date.getHours() <= 12) {
      hour = date.getHours();
    }
    if (date.getHours() == 0) {
      hour = 12;
    }
    return hour;
  }

  private getMinuteByDate(date: Date): number {
    return date.getMinutes();
  }

  private getMeridiamByDate(date: Date): string {
    let meridiam = 'not found';
    if (date.getHours() <= 23) {
      meridiam = 'PM';
    }
    if (date.getHours() <= 11) {
      meridiam = 'AM';
    }
    return meridiam;
  }

  // time: HH:mm:ss
  public setByParams(time: string): void {
    const date = '12-12-12 ' + time;
    this.setByDate(new Date(date));
  }

  public getHour(): number | null {
    return this.hour;
  }

  public getMinute(): number | null {
    return this.minute;
  }

  public getMeridiam(): string | null {
    return this.meridiam;
  }

  public setHour(hour: number): void {
    this.hour = hour;
  }

  public setMinute(minute: number): void {
    this.minute = minute;
  }

  public setMeridiam(meridiam: string): void {
    this.meridiam = meridiam;
  }
}
