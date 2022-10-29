export class UtilsC {
  public commonRoundOutHundredths(num: number): number {
    const numberInString = String(num);
    let numberReturn = num;
    if (numberInString.includes('.')) {
      const splitedNumber = numberInString.split('.');
      const decimal = splitedNumber[1].slice(0, 2);
      numberReturn = Number(splitedNumber[0] + '.' + decimal);
    }
    return numberReturn;
  }
}
