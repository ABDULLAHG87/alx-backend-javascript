const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber() with type SUM', () => {
  it('add 6 and 4', () => {
    expect(calculateNumber('SUM', 6, 4)).to.equal(10);
  });
  it('add 3.55 and 10', () => {
    expect(calculateNumber('SUM', 3.55, 10)).to.equal(14);
  });
  it('add 1 and 4.76', () => {
    expect(calculateNumber('SUM', 1, 4.76)).to.equal(6);
  });
  it('add 3.0 and 4.0', () => {
    expect(calculateNumber('SUM', 3.0, 4.0)).to.equal(7);
  });
  it('add 1.2 and 4.32', () => {
    expect(calculateNumber('SUM', 1.2, 4.32)).to.equal(5);
  });
  it('add -6 and 4', () => {
    expect(calculateNumber('SUM', -6, 4)).to.equal(-2);
  });
  it('add 6 and -4.5', () => {
    expect(calculateNumber('SUM', 6, -4.5)).to.equal(2);
  });
});

describe('calculateNumber() with type SUBTRACT', () => {
  it('subtract 4 from 6', () => {
    expect(calculateNumber('SUBTRACT', 6, 4)).to.equal(2);
  });
  it('subtract 10 from 3.55', () => {
    expect(calculateNumber('SUBTRACT', 3.55, 10)).to.equal(-6);
  });
  it('subtract 1 from 4.76', () => {
    expect(calculateNumber('SUBTRACT', 4.76, 1)).to.equal(4);
  });
  it('subtract 4.0 from 3.0', () => {
    expect(calculateNumber('SUBTRACT', 3.0, 4.0)).to.equal(-1);
  });
  it('subtract  1.2 from 4.32', () => {
    expect(calculateNumber('SUBTRACT', 4.32, 1.2)).to.equal(3);
  });
  it('subtract 4 from -6', () => {
    expect(calculateNumber('SUBTRACT', -6, 4)).to.equal(-10);
  });
  it('subtract -4.5 from 6', () => {
    expect(calculateNumber('SUBTRACT', 6, -4.5)).to.equal(10);
  });
});

describe('calculateNumber() with type DIVIDE', () => {
  it('divide 6 by 4', () => {
    expect(calculateNumber('DIVIDE', 6, 4)).to.equal(1.5);
  });
  it('divide 3.55 by 10', () => {
    expect(calculateNumber('DIVIDE', 3.55, 10)).to.equal(0.4);
  });
  it('divide 1 by 4.76', () => {
    expect(calculateNumber('DIVIDE', 1, 4.76)).to.equal(0.2);
  });
  it('divide 3.0 by 4.0', () => {
    expect(calculateNumber('DIVIDE', 3.0, 4.0)).to.equal(0.75);
  });
  it('divide 1.2 by 4.32', () => {
    expect(calculateNumber('DIVIDE', 1.2, 4.32)).to.equal(0.25);
  });
  it('divide -6 by 4', () => {
    expect(calculateNumber('DIVIDE', -6, 4)).to.equal(-1.5);
  });
  it('divide -0.3 by -0.4', () => {
    expect(calculateNumber('DIVIDE', 0.3, -0.4)).to.equal('Error');
  });
  it('divide -1.3 by -1.45', () => {
    expect(calculateNumber('DIVIDE', -1.3, -1.45)).to.equal(1);
  });
});
