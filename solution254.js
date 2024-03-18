// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]


//? Prameters: an array of numbers

//? Return: an array of numbers but remove any duplicates 

//? Example:
// assert.deepEqual(distinct([1]), [1]);
// assert.deepEqual(distinct([1,2]), [1,2]);
// assert.deepEqual(distinct([1,1,2]), [1,2]);

//? Psuedocode: filter() with index or try Set constructor

const assert = require('assert')                               //! thinking of installing "chai" libary for tests

function distinct(a) {
    return [...new Set(a)]
  }
console.log(distinct([1,1,2]))

assert.strictEqual(distinct([1]), [1]);
assert.strictEqual(distinct([1,2]), [1,2]);
assert.strictEqual(distinct([1,1,2]), [1,2]);
