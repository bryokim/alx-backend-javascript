const request = require("request");
const expect = require("chai").expect;

describe("api", function () {
  it("Status code == 200", function () {
    request("http://localhost:7865", function (error, response, body) {
      response && expect(response.statusCode).to.equal(200);
    });
  });
  it("Body is Welcome to the payment system", function () {
    request("http://localhost:7865", function (error, response, body) {
      body && expect(body).to.equal("Welcome to the payment system");
    });
  });
});
