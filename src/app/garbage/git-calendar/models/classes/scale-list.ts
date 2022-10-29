import { ScaleC } from './scale';

export class ScaleListC {
  private amount!: number;

  private colorHexa!: string;

  private scales!: ScaleC[];

  constructor(amount: number, colorHexa: string, scales: ScaleC[] = []) {
    this.amount = amount;
    this.colorHexa = colorHexa;
    this.scales = scales;
  }

  public generateScales(): void {
    const colors = this.generatedColors();
    for (let i = 0; i < this.amount; i++) {
      this.scales.push(new ScaleC(i + 1, colors[i]));
    }
  }

  private generatedColors(): Array<string> {
    //this method should generate colors, but for the moment some defaults colors are those:
    return ['#FF3333', '#FF7433', '#FFB533', '#FFF333'];
  }

  public getScales() {
    return this.scales;
  }
}
