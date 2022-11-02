export class ButtonContentC {
  private name!: string;

  private icon!: string;

  constructor(name: string, icon: string = '') {
    this.name = name;
    this.icon = icon;
  }

  public getName(): string {
    return this.name;
  }

  public getIcon(): string {
    return this.icon;
  }
}
