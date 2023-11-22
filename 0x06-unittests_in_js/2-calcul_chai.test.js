const calculateNumber = require("./1-calcul");
const expect = require("chai").expect;

describe("calculateNumber", function () {
  describe("#SUM", function () {
    it("1 + 1 = 2", function () {
      expect(calculateNumber("SUM", 1, 1)).to.equal(2);
    });
    it("1.1 + 3.4 = 4", function () {
      expect(calculateNumber("SUM", 1.1, 3.4)).to.equal(4);
    });
    it("1.5 + 3.4 = 5", function () {
      expect(calculateNumber("SUM", 1.5, 3.4)).to.equal(5);
    });
    it("1.5 + 3.5 = 6", function () {
      expect(calculateNumber("SUM", 1.5, 3.5)).to.equal(6);
    });
    it("1.9 + 3.7 = 6", function () {
      expect(calculateNumber("SUM", 1.9, 3.7)).to.equal(6);
    });
  });

  describe("#SUBTRACT", function () {
    it("1 - 1 = 0", function () {
      expect(calculateNumber("SUBTRACT", 1, 1)).to.equal(0);
    });
    it("1.1 - 3.4 = -2", function () {
      expect(calculateNumber("SUBTRACT", 1.1, 3.4)).to.equal(-2);
    });
    it("1.5 - 3.4 = -1", function () {
      expect(calculateNumber("SUBTRACT", 1.5, 3.4)).to.equal(-1);
    });
    it("1.5 - 3.5 = -2", function () {
      expect(calculateNumber("SUBTRACT", 1.5, 3.5)).to.equal(-2);
    });
    it("1.9 - 3.7 = -2", function () {
      expect(calculateNumber("SUBTRACT", 1.9, 3.7)).to.equal(-2);
    });
    it("3.8 - 3.7 = 0", function () {
      expect(calculateNumber("SUBTRACT", 3.8, 3.7)).to.equal(0);
    });
  });

  describe("#DIVIDE", function () {
    it("1 / 1 = 1", function () {});
    it("1.1 / 3.4 = 1/3", function () {
      expect(calculateNumber("DIVIDE", 1.1, 3.4)).to.equal(1 / 3);
    });
    it("3.4 / 1.5 = 1.5", function () {
      expect(calculateNumber("DIVIDE", 3.4, 1.5)).to.equal(1.5);
    });
    it("3.5 / 1.5 = 2", function () {
      expect(calculateNumber("DIVIDE", 3.5, 1.5)).to.equal(2);
    });
    it("3.7 / 1.9 = 2", function () {
      expect(calculateNumber("DIVIDE", 3.7, 1.9)).to.equal(2);
    });
    it("4 / 0 = Error", function () {
      expect(calculateNumber("DIVIDE", 4, 0)).to.equal("Error");
    });
    it("4 / 0.4 = Error", function () {
      expect(calculateNumber("DIVIDE", 4, 0.4)).to.equal("Error");
    });
  });
});
