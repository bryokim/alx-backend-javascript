const request = require("request");
const expect = require("chai").expect;

describe("api", function () {
  const BASE_URL = "http://localhost:7865";

  describe("GET /", function () {
    it("Status code == 200", function () {
      request(`${BASE_URL}/`, function (error, response, body) {
        expect(error).to.be.null;
        response && expect(response.statusCode).to.equal(200);
      });
    });
    it("Body is Welcome to the payment system", function () {
      request(`${BASE_URL}/`, function (error, response, body) {
        expect(error).to.be.null;
        body && expect(body).to.equal("Welcome to the payment system");
      });
    });
    it("try post method", function () {
      request.post(`${BASE_URL}/`, function (error, response, body) {
        expect(error).to.be.null;
        response && expect(response.statusCode).to.equal(404);
      });
    });
  });

  describe("GET /cart/:id", function () {
    it("id is number", function () {
      request(`${BASE_URL}/cart/23`, function (error, response, body) {
        expect(error).to.be.null;
        response && expect(response.statusCode).to.equal(200);
        body && expect(body).to.equal("Payment methods for cart 23");
      });
    });
    it("id is not number", function () {
      request(`${BASE_URL}/cart/kim`, function (error, response, body) {
        expect(error).to.be.null;
        response && expect(response.statusCode).to.equal(404);
      });
    });
    it("try post method", function () {
      request.post(`${BASE_URL}/cart/kim`, function (error, response, body) {
        expect(error).to.be.null;
        response && expect(response.statusCode).to.equal(404);
      });
    });
  });

  describe("POST /login", function () {
    it("login with userName in body", function () {
      request.post(
        {
          url: `${BASE_URL}/login`,
          body: JSON.stringify({ userName: "One" }),
          headers: {
            "content-type": "application/json",
          },
        },
        function (error, response, body) {
          expect(error).to.be.null;
          response && expect(response.statusCode).to.equal(200);
          body && expect(body).to.equal("Welcome One");
        }
      );
    });
    it("login without userName in body", function () {
      request.post(
        {
          url: `${BASE_URL}/login`,
          body: JSON.stringify({ userNam: "One" }),
          headers: {
            "content-type": "application/json",
          },
        },
        function (error, response, body) {
          expect(error).to.be.null;
          response && expect(response.statusCode).to.equal(200);
          body && expect(body).to.equal("Welcome undefined");
        }
      );
    });
    it("try get method", function () {
      request.get(`${BASE_URL}/login`, function (error, response, body) {
        expect(error).to.be.null;
        response && expect(response.statusCode).to.equal(404);
      });
    });
  });

  describe("GET /available-payments", function () {
    it("check return value", function () {
      request.get(
        `${BASE_URL}/available_payments`,
        function (error, response, body) {
          expect(error).to.be.null;

          response && expect(response.statusCode).to.equal(200);
          body &&
            expect(body).to.equal(
              JSON.stringify({
                payment_methods: {
                  credit_cards: true,
                  paypal: false,
                },
              })
            );
        }
      );
    });
    it("try post method", function () {
      request.post(
        `${BASE_URL}/available_payments`,
        function (error, response, body) {
          expect(error).to.be.null;

          response && expect(response.statusCode).to.equal(404);
        }
      );
    });
  });
});
