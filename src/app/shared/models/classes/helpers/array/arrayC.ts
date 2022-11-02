export class ArrayC {
  constructor() {}

  public static joinedArrays<T>(arrays: Array<Array<T>>): Array<T> {
    const joinedArrays: T[] = [];
    for (let i = 0; i < arrays.length; i++) {
      for (let j = 0; j < arrays[i].length; j++) {
        joinedArrays.push(arrays[i][j]);
      }
    }
    return joinedArrays;
  }
}
