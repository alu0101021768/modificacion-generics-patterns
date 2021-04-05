import 'mocha';
import {expect} from 'chai';
import {RandomNumber} from '../src/randomNumber';
import {RandomNumberSetCollection} from '../src/randomNumberSetCollection';

describe('RandomNumberSetCollection class tests', () => {
  const rngCollection = new RandomNumberSetCollection([
    RandomNumber.getRandomNumberInstance().getFloatBetween0and1(),
    RandomNumber.getRandomNumberInstance().getFloatBetweenNandM(2, 8),
  ]);
  it('getNumberOfRandomNumbers() should be equal to 2', () => {
    expect(rngCollection.getNumberOfRandomNumbers()).to.eq(2);
  });
  it('addRandomNumber should add a random number correctly', () => {
    expect(rngCollection.getNumberOfRandomNumbers()).to.eq(2);
    rngCollection.addRandomNumber(RandomNumber.getRandomNumberInstance()
        .getIntegerBetweenNandM(5, 12));
    expect(rngCollection.getNumberOfRandomNumbers()).to.eq(3);
  });
  // it('getNumberOfRandomNumbers() should be equal to 3', () => {
  //   expect(rngCollection.getNumberOfRandomNumbers()).to.eq(3);
  // });
});


