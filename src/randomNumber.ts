/**
 * @description RandonNumber class that represents random generated numbers
 */
export class RandomNumber {
  private static randomNumberInstance: RandomNumber;
  /**
   * @description Constructor that initializes the value of a randomNumber
   */
  constructor() {
  }
  /**
   * @description Function that creates a instance of a randomNumber if it
   * doesnt exists, and returns the same instance always if created
   * @returns Returns a RandomNumber
   */
  public static getRandomNumberInstance(): RandomNumber {
    if (!RandomNumber.randomNumberInstance) {
      RandomNumber.randomNumberInstance = new RandomNumber();
    }
    return RandomNumber.randomNumberInstance;
  }
  /**
   * @description Function that returns a float between 0 and 1
   * @returns Returns a random number between 0 and 1
   */
  getFloatBetween0and1() {
    return Math.random();
  }
  /**
   * @desription Function that returns a random number between n and m
   * @param n Consists on a number, its the min value
   * @param m Consists on a number, its the max value
   * @returns
   */
  getFloatBetweenNandM(n: number, m: number) {
    return Math.random() * (m - n) + n;
  }
  /**
   * @description Function that returns a integer between n and m
   * @param n Consists on a number, its the min value
   * @param m Consists on a number, its the max value
   * @returns Returns a random integer between n and m
   */
  getIntegerBetweenNandM(n: number, m: number) {
    n = Math.ceil(n);
    m = Math.floor(m);
    return Math.floor(Math.random() * (m - n) + n);
  }
}

