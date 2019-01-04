const { sum } = require('../index');

describe('Test sum function', () => {
  it('should return 11 for 5 + 6', () => {
    expect(sum(5, 6)).toBe(11);
  });

  it('should throw an error for zero parameters passed', () => {
    expect(() => sum()).toThrow();
  });
})
