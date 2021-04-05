import 'mocha';
import {expect} from 'chai';
import {RandomNumber} from '../src/randomNumber';

describe('RandomNumber class tests', () => {
  it('getFloatBetween0and1() returns a float number between 0 and 1', () => {
    expect(RandomNumber.getRandomNumberInstance().getFloatBetween0and1()).
        to.be.greaterThanOrEqual(0);
    expect(RandomNumber.getRandomNumberInstance().getFloatBetween0and1()).
        to.be.lessThanOrEqual(1);
  });
  it('getFloatBetweenNandM(2, 8) returns a float number between 2 and 8',
      () => {
        expect(RandomNumber.getRandomNumberInstance()
            .getFloatBetweenNandM(2, 8)).to.be.greaterThanOrEqual(2);
        expect(RandomNumber.getRandomNumberInstance().getFloatBetween0and1()).
            to.be.lessThanOrEqual(8);
      });
  it('getFloatBetween0and1() returns a float number between 0 and 1', () => {
    expect(RandomNumber.getRandomNumberInstance().getFloatBetweenNandM(2, 8)).
        to.be.greaterThanOrEqual(2);
    expect(RandomNumber.getRandomNumberInstance().getFloatBetween0and1()).
        to.be.lessThanOrEqual(8);
  });
  it('getIntegerBetweenNandM(17, 20) returns a integer between 17 and 20',
      () => {
        expect(RandomNumber.getRandomNumberInstance()
            .getIntegerBetweenNandM(17, 20)).
            to.be.greaterThanOrEqual(17);
        expect(RandomNumber.getRandomNumberInstance().getFloatBetween0and1()).
            to.be.lessThanOrEqual(20);
      });
});

