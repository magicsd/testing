const { sum } = require('./index');
const assert = require('assert');

describe('Test sum function', () => {
  it('should return 11 for 5 + 6', () => {
    assert.equal(sum(5, 6), 11);
  });

  it('should throw an error for zero parameters passed', () => {
    assert.throws(() => { sum() });
  });
})
