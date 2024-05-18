const utils = require('./utils');

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => b !== 0 ? a / b : 'Cannot divide by zero'
};

console.log(operations.add(1, 2));
console.log(operations.subtract(4, 2));
console.log(operations.multiply(3, 3));
console.log(operations.divide(10, 2));
