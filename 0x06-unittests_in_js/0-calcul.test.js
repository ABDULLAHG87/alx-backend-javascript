xconst calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe('calculateNumber', () => {
  it('rounding of a', () => {
    assert.equal(calculateNumber(13.45, 7), 20);
    assert.equal(calculateNumber(17.55, 1), 19);
    assert.equal(calculateNumber(1.05, 3), 4);
  });

  it('rounding of b', () => {
    assert.equal(calculateNumber(7, 13.45), 20);
    assert.equal(calculateNumber(1, 17.55), 19);
    assert.equal(calculateNumber(3, 1.05), 4);
  });

  it('suming of a and b', () => {
    assert.equal(calculateNumber(13.45, 7.6), 21);
    assert.equal(calculateNumber(17.55, 1.02), 19);
    assert.equal(calculateNumber(1.66, 7.89), 10);
  });
});
