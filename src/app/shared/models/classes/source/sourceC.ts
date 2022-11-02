export class SourceC {
  private name!: string;

  private url!: string;

  constructor(name: string, url: string) {
    this.name = name;
    this.url = url;
  }

  public getName(): string {
    return this.name;
  }

  public getUrl(): string {
    return this.url;
  }

  public static isInSeeder(source: SourceC, seeder: SourceC[]): boolean {
    for (let i = 0; i < seeder.length; i++) {
      if (seeder[i].getName() == source.name) {
        return true;
      }
    }
    return false;
  }
}
