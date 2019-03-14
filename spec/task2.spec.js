/* eslint-disable no-undef */
const algorithms = require('../algorithms');

describe('Tests for task2', () => {
  it('First test', () => {
    const reversedNumber = algorithms.reverseNumber(123);
    expect(reversedNumber).toEqual(321);
  });

  it('Second test', () => {
    const reversedNumber = algorithms.reverseNumber(7432);
    expect(reversedNumber).toEqual(2347);
  });
});
