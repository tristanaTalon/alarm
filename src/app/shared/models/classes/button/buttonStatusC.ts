export class ButtonStatusC {
  private actived!: boolean;

  private enabled!: boolean;

  constructor(actived: boolean, enabled: boolean) {
    this.actived = actived;
    this.enabled = enabled;
  }

  public isActivated(): boolean {
    return this.actived;
  }

  public isEnabled(): boolean {
    return this.enabled;
  }

  public activate(): void {
    this.actived = true;
  }

  public deactivate(): void {
    this.actived = false;
  }

  public enable(): void {
    this.enabled = true;
  }

  public disable(): void {
    this.enabled = false;
  }
}
