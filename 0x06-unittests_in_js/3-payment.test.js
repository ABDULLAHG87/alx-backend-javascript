const sinon = require('sinon');
const { expect } = require('chai');

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('Spies', function () {
  it('has the same computation', () => {
    const spyUtils = sinon(Utils, 'calculateNumber');
    const spyConsole = sinon.spy(console, 'log');

    sendPaymentRequestToApi(120, 30);

    expect(spyUtils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(spyConsole.calledOnceWithExactly('The Total is: 120')).to.be.true;
    spyUtils.restore();
    spyConsole.restore();
  });
});
