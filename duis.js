const exampleObj = {};
exampleObj.height = 100;
exampleObj.width = 100;

// Checking for existing property
const result1 = exampleObj.hasOwnProperty("height");

// Checking for non-existing property
const result2 = exampleObj.hasOwnProperty("breadth");

console.log(result1); // true
console.log(result2); // false
