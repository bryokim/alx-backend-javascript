const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", function () {
  describe("#SUM", function () {
    it("1 + 1 = 2", function () {
      assert.equal(calculateNumber("SUM", 1, 1), 2);
    });
    it("1.1 + 3.4 = 4", function () {
      assert.equal(calculateNumber("SUM", 1.1, 3.4), 4);
    });
    it("1.5 + 3.4 = 5", function () {
      assert.equal(calculateNumber("SUM", 1.5, 3.4), 5);
    });
    it("1.5 + 3.5 = 6", function () {
      assert.equal(calculateNumber("SUM", 1.5, 3.5), 6);
    });
    it("1.9 + 3.7 = 6", function () {
      assert.equal(calculateNumber("SUM", 1.9, 3.7), 6);
    });
  });

  describe("#SUBTRACT", function () {
    it("1 - 1 = 0", function () {
      assert.equal(calculateNumber("SUBTRACT", 1, 1), 0);
    });
    it("1.1 - 3.4 = -2", function () {
      assert.equal(calculateNumber("SUBTRACT", 1.1, 3.4), -2);
    });
    it("1.5 - 3.4 = -1", function () {
      assert.equal(calculateNumber("SUBTRACT", 1.5, 3.4), -1);
    });
    it("1.5 - 3.5 = -2", function () {
      assert.equal(calculateNumber("SUBTRACT", 1.5, 3.5), -2);
    });
    it("1.9 - 3.7 = -2", function () {
      assert.equal(calculateNumber("SUBTRACT", 1.9, 3.7), -2);
    });
    it("3.8 - 3.7 = 0", function () {
      assert.equal(calculateNumber("SUBTRACT", 3.8, 3.7), 0);
    });
  });

  describe("#DIVIDE", function () {
    it("1 / 1 = 1", function () {
      assert.equal(calculateNumber("DIVIDE", 1, 1), 1);
    });
    it("1.1 / 3.4 = 1/3", function () {
      assert.equal(calculateNumber("DIVIDE", 1.1, 3.4), 1 / 3);
    });
    it("3.4 / 1.5 = 1.5", function () {
      assert.equal(calculateNumber("DIVIDE", 3.4, 1.5), 1.5);
    });
    it("3.5 / 1.5 = 2", function () {
      assert.equal(calculateNumber("DIVIDE", 3.5, 1.5), 2);
    });
    it("3.7 / 1.9 = 2", function () {
      assert.equal(calculateNumber("DIVIDE", 3.7, 1.9), 2);
    });
    it("4 / 0 = Error", function () {
      assert.equal(calculateNumber("DIVIDE", 4, 0), "Error");
    });
    it("4 / 0.4 = Error", function () {
      assert.equal(calculateNumber("DIVIDE", 4, 0.4), "Error");
    });
  });
});
