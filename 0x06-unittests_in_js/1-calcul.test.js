const calculateNumber = require('./1-calcul.js');
const assert = require('assert');

describe('calculateNumber() with type SUM', () => {
  it('add 6 and 4', () => {
    assert.equal(calculateNumber('SUM', 6, 4), 10);
  });
  it('add 3.55 and 10', () => {
    assert.equal(calculateNumber('SUM', 3.55, 10), 14);
  });
  it('add 1 and 4.76', () => {
    assert.equal(calculateNumber('SUM', 1, 4.76), 6);
  });
  it('add 3.0 and 4.0', () => {
    assert.equal(calculateNumber('SUM', 3.0, 4.0), 7);
  });
  it('add 1.2 and 4.32', () => {
    assert.equal(calculateNumber('SUM', 1.2, 4.32), 5);
  });
  it('add -6 and 4', () => {
    assert.equal(calculateNumber('SUM', -6, 4), -2);
  });
  it('add 6 and -4.5', () => {
    assert.equal(calculateNumber('SUM', 6, -4.5), 2);
  });
});

describe('calculateNumber() with type SUBTRACT', () => {
  it('subtract 4 from 6', () => {
    assert.equal(calculateNumber('SUBTRACT', 6, 4), 2);
  });
  it('subtract 10 from 3.55', () => {
    assert.equal(calculateNumber('SUBTRACT', 3.55, 10), -6);
  });
  it('subtract 1 from 4.76', () => {
    assert.equal(calculateNumber('SUBTRACT', 4.76, 1), 4);
  });
  it('subtract 4.0 from 3.0', () => {
    assert.equal(calculateNumber('SUBTRACT', 3.0, 4.0), -1);
  });
  it('subtract  1.2 from 4.32', () => {
    assert.equal(calculateNumber('SUBTRACT', 4.32, 1.2), 3);
  });
  it('subtract 4 from -6', () => {
    assert.equal(calculateNumber('SUBTRACT', -6, 4), -10);
  });
  it('subtract -4.5 from 6', () => {
    assert.equal(calculateNumber('SUBTRACT', 6, -4.5), 10);
  });
});

describe('calculateNumber() with type DIVIDE', () => {
  it('divide 6 by 4', () => {
    assert.equal(calculateNumber('DIVIDE', 6, 4), 1.5);
  });
  it('divide 3.55 by 10', () => {
    assert.equal(calculateNumber('DIVIDE', 3.55, 10), 0.4);
  });
  it('divide 1 by 4.76', () => {
    assert.equal(calculateNumber('DIVIDE', 1, 4.76), 0.2);
  });
  it('divide 3.0 by 4.0', () => {
    assert.equal(calculateNumber('DIVIDE', 3.0, 4.0), 0.75);
  });
  it('divide 1.2 by 4.32', () => {
    assert.equal(calculateNumber('DIVIDE', 1.2, 4.32), 0.25);
  });
  it('divide -6 by 4', () => {
    assert.equal(calculateNumber('DIVIDE', -6, 4), -1.5);
  });
  it('divide -0.3 by -0.4', () => {
    assert.equal(calculateNumber('DIVIDE', 0.3, -0.4), 'Error');
  });
  it('divide -1.3 by -1.45', () => {
    assert.equal(calculateNumber('DIVIDE', -1.3, -1.45), 1);
  });
});
