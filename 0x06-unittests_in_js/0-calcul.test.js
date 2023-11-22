const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", function () {
  it("1 + 3 = 4", function () {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it("1.1 + 3.4 = 4", function () {
    assert.equal(calculateNumber(1.1, 3.4), 4);
  });
  it("1.5 + 3.4 = 5", function () {
    assert.equal(calculateNumber(1.5, 3.4), 5);
  });
  it("1.5 + 3.5 = 6", function () {
    assert.equal(calculateNumber(1.5, 3.5), 6);
  });
  it("1.9 + 3.7 = 6", function () {
    assert.equal(calculateNumber(1.9, 3.7), 6);
  });
});
