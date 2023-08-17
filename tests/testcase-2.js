const Decode = require("../solution")

const testData = {
  "known": {
    "e": 9,
    "gee": 22,
    "dad": 15,
    "babaa": 9,
    "chad": 19
  },
  unknown: "figged" // 34
}

module.exports = function init() {
  const test = new Decode(testData.known);
  console.log("test #2")
  console.log("Expected: ", 34);
  console.log("Result: ", test.solveUnknown(testData.unknown))
  console.log("\n")
}