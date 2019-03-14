/* eslint-disable no-undef */
const algorithms = require('../algorithms');

describe('Tests for task1', () => {
  it('True test', () => {
    const a = algorithms.task1(6);
    expect(a).toBe(true);
  });

  it('False test', () => {
    const a = algorithms.task1(3);
    expect(a).toBe(false);
  });
});
