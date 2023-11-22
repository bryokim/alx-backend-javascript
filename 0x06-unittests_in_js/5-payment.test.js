const sinon = require("sinon");

const sendPaymentRequestToAPI = require("./5-payment");
const { expect } = require("chai");

describe("Test 5-payment.js", function () {
  const sandbox = sinon.createSandbox();

  beforeEach(function () {
    sandbox.spy(console, "log");
  });

  afterEach(function () {
    sandbox.restore();
  });

  it("sendPaymentRequestToAPI(100, 20)", function () {
    sendPaymentRequestToAPI(100, 20);

    expect(console.log.calledOnce).to.be.true;
    expect(console.log.firstCall.args[0]).to.equal("The total is: 120");
  });

  it("sendPaymentRequestToAPI(10, 10)", function () {
    sendPaymentRequestToAPI(10, 10);

    expect(console.log.calledOnce).to.be.true;
    expect(console.log.firstCall.args[0]).to.equal("The total is: 20");
  });
});
