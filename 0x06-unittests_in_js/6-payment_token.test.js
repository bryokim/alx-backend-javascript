const expect = require("chai").expect;
const getPaymentTokenFromAPI = require("./6-payment_token");

describe("getPaymentTokenFromAPI", function () {
  it("Test truthy argument", function (done) {
    getPaymentTokenFromAPI(true)
      .then((data) => {
        expect(data)
          .to.have.property("data")
          .equal("Successful response from the API");
        done();
      })
      .catch((error) => done(error));
  });
  it("Test falsy argument", function () {
    expect(getPaymentTokenFromAPI(false)).to.be.undefined;
  });
});
