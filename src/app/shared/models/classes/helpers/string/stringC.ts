export class StringC {
  constructor() {}

  public static subString(
    string: string,
    division: string,
    part: number
  ): string {
    return string.split(division)[part];
  }
}
