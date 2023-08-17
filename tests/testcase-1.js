const Decode = require("../solution")

const testData = {
  "known": {
    "e": 4,
    "gee": 16,
    "dad": 24,
    "baba": 18,
    "chad": 23
  },
  unknown: "figged" // 36
}

module.exports = function init() {
  const test = new Decode(testData.known);
  console.log("test #1")
  console.log("Expected: ", 36);
  console.log("Result: ", test.solveUnknown(testData.unknown))
  console.log("\n")
}

// a: 6
// b: 3
// c: 7
// d: 9
// e: 4
// f: 2
// g: 8
// h: 1
// i: 5