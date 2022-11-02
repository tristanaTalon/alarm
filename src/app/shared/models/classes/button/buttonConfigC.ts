export class ButtonConfigC {
  private type!: '' | 'raised' | 'stroked' | 'flat';

  private color!: 'primary' | 'accent' | 'warn';

  private disabled!: boolean;

  constructor(
    type: '' | 'raised' | 'stroked' | 'flat',
    color: 'primary' | 'accent' | 'warn',
    disabled: boolean = false
  ) {
    this.type = type;
    this.color = color;
    this.disabled = disabled;
  }

  public getType(): '' | 'raised' | 'stroked' | 'flat' {
    return this.type;
  }

  public setType(type: '' | 'raised' | 'stroked' | 'flat'): void {
    this.type = type;
  }

  public getColor(): 'primary' | 'accent' | 'warn' {
    return this.color;
  }

  public isDisabled(): boolean {
    return this.disabled;
  }

  public enable(): void {
    this.disabled = false;
  }

  public disable(): void {
    this.disabled = true;
  }

  public toggle(): void {
    this.disabled != this.disabled;
  }
}
