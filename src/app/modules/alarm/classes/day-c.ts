export class DayC {
  private nameA: string;

  private idA: number;

  private statusA: boolean;

  constructor(i: number) {
    this.idA = i;
    this.nameA = this.getName();
    this.statusA = false;
  }

  public getName(): string {
    if (this.idA == 0) return 'D';
    if (this.idA == 1) return 'L';
    if (this.idA == 2) return 'M';
    if (this.idA == 3) return 'M';
    if (this.idA == 4) return 'J';
    if (this.idA == 5) return 'V';
    if (this.idA == 6) return 'S';

    return '';
  }

  public name(): string {
    return this.nameA;
  }

  public toggleStatus(): void {
    this.statusA = !this.statusA;
  }
}
