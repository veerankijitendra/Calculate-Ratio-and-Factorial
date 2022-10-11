const factorialOfNumber = require("../factorial");
const ratioOfNumbers = require("../ratio");

const ratioFactorial = (a, b, c) => {
  const factFactorialObject = {
    ratio: ratioOfNumbers(a, b),
    factorial: factorialOfNumber(c),
  };

  return factFactorialObject;
};

console.log(ratioFactorial(3, 5, 5));

module.exports = ratioFactorial;
