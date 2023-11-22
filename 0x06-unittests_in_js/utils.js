const Utils = {
  calculateNumber: function (type, a, b) {
    const rounded_a = Math.round(a);
    const rounded_b = Math.round(b);

    if (type === "SUM") return rounded_a + rounded_b;
    else if (type === "SUBTRACT") return rounded_a - rounded_b;
    else if (type === "DIVIDE") {
      if (rounded_b !== 0) return rounded_a / rounded_b;
      else return "Error";
    }
  },
};

module.exports = Utils;
