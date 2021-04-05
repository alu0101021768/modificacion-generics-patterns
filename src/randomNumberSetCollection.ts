
/**
 * @description Class that represents a random number collection
 */
export class RandomNumberSetCollection<T> implements Iterable<T> {
  private randomNumbers: Set<T>;

  /**
   * @description Constructor that initializes the set of numbers
   * @param numbers
   */
  constructor(numbers: T[]) {
    this.randomNumbers = new Set(numbers);
  }
  /**
   * @description Function that adds a number to the collection
   * @param newNumber Consists on a T
   */
  addRandomNumber(newNumber: T) {
    this.randomNumbers.add(newNumber);
  }
  /**
   * @description Function that returns the number of random numbers
   * @returns Returns a number consisting on the set size
   */
  getNumberOfRandomNumbers() {
    return this.randomNumbers.size;
  }
  /**
   * @description Method that allows the class to be iterable and it needs
   * to be implemented since it is implementing the Iterable interface
   * @returns Returns an Iterator
   */
  [Symbol.iterator](): Iterator<T> {
    return this.randomNumbers.values();
  }
}

