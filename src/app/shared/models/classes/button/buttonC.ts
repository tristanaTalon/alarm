import { ButtonConfigC } from './buttonConfigC';
import { ButtonContentC } from './buttonContentC';
import { ButtonStatusC } from './buttonStatusC';

export class ButtonC {
  private buttonConfig!: ButtonConfigC;

  private buttonContent!: ButtonContentC;

  private buttonStatus!: ButtonStatusC;

  private url!: string;

  constructor(
    buttonConfig: ButtonConfigC,
    buttonContent: ButtonContentC,
    buttonStatus: ButtonStatusC = new ButtonStatusC(false, true),
    url: string = ''
  ) {
    this.buttonConfig = buttonConfig;
    this.buttonContent = buttonContent;
    this.buttonStatus = buttonStatus;
    this.url = url;
  }

  public getButtonConfig(): ButtonConfigC {
    return this.buttonConfig;
  }

  public getButtonContent(): ButtonContentC {
    return this.buttonContent;
  }

  public getButtonStatus(): ButtonStatusC {
    return this.buttonStatus;
  }

  public getUrl(): string {
    return this.url;
  }

  public setUrl(url: string): void {
    this.url = url;
  }
}
