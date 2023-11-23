const expect = require("chai").expect;
const sinon = require("sinon");

const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");

describe("sendPaymentRequestToApi", function () {
  const sandbox = sinon.createSandbox();

  beforeEach(function () {
    sandbox.spy(console, "log");
  });

  afterEach(function () {
    sandbox.restore();
  });

  it("Should call Utils.calculateNumber", function () {
    const calculateNumberStub = sinon
      .stub(Utils, "calculateNumber")
      .returns(10);

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnce).to.be.true;
    expect(calculateNumberStub.firstCall.args[0]).to.equal("SUM");
    expect(calculateNumberStub.firstCall.args[1]).to.equal(100);
    expect(calculateNumberStub.firstCall.args[2]).to.equal(20);

    expect(console.log.firstCall.args[0]).to.equal("The total is: 10");

    calculateNumberStub.restore();
  });
});
