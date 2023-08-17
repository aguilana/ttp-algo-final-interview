const Decode = require("../solution")

const testData = {
  "known": {
    "a": 5,
    "add": 7,
    "abi": 20,
    "feed": 22,
    "cggeb": 25
  },
  unknown: "figged" // 31
}



module.exports = function init() {
  const test = new Decode(testData.known);
  console.log("test #5");
  console.log("Expected: ", 31);
  console.log("Result: ", test.solveUnknown(testData.unknown))

  console.log("\n")
}

// a: 5
// b: 8
// c: 3
// d: 1
// e: 6
// f: 9
// g: 4
// h: 2
// i: 7