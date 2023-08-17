const Decode = require("../solution")

const testData = {
  "known": {
    "fe": 4,
    "gee": 7,
    "dad": 18,
    "babaa": 14,
    "chad": 23
  },
  unknown: "figged" // 31
}

module.exports = function init() {
  const test = new Decode(testData.known);
  console.log("test #3");
  console.log("Expected: ", 31);
  console.log("Result: ", test.solveUnknown(testData.unknown))

  console.log("\n")
}

