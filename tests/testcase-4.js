const Decode = require("../solution")

const testData = {
  "known": {
    "a": 9,
    "add": 25,
    "abi": 13,
    "feed": 23,
    "cabbageb": 38
  },
  unknown: "figged" // 24
}



module.exports = function init() {
  const test = new Decode(testData.known);
  console.log("test #4");
  console.log("Expected: ", 24);
  console.log("Result: ", test.solveUnknown(testData.unknown))

  console.log("\n")
}

// a: 9
// b: 3
// c: 5
// d: 8
// e: 4
// f: 7
// g: 2
// h: 6
// i: 1