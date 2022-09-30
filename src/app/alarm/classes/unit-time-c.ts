export class UnitTimeC {
  private typeA: string;

  private valueA: number | string;

  constructor(type: string, value: number = -1) {
    this.typeA = type;
    this.valueA = value;
  }

  public setValue(value: number | string) {
    this.valueA = value;
  }

  public value() {
    return this.valueA;
  }
}
