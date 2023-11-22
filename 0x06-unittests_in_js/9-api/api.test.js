const request = require("request");
const expect = require("chai").expect;

describe("api", function () {
  describe("GET /", function () {
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

  describe("GET /cart/:id", function () {
    it("id is number", function () {
      request(
        "http://localhost:7865/cart/23",
        function (error, response, body) {
          response && expect(response.statusCode).to.equal(200);
          body && expect(body).to.equal("Payment methods for cart 23");
        }
      );
    });
    it("id is not number", function () {
      request(
        "http://localhost:7865/cart/kim",
        function (error, response, body) {
          response && expect(response.statusCode).to.equal(404);
        }
      );
    });
  });
});
