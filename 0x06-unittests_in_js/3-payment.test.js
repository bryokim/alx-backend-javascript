const expect = require("chai").expect;
const sinon = require("sinon");

const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");

describe("sendPaymentRequestToApi", function () {
  it("Should call Utils.calculateNumber", function () {
    sinon.spy(Utils, "calculateNumber");

    sendPaymentRequestToApi(100, 20);

    expect(Utils.calculateNumber.calledOnce).to.be.true;
    expect(Utils.calculateNumber.firstCall.args[0]).to.equal("SUM");

    sinon.restore();
  });
});
