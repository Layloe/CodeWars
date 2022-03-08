// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

//? Prameters: an array of num

//? Return: an array with the nums doubled *2

//? Example:
// assert.strictEqual(maps([1, 2, 3]), [2, 4, 6]);
// assert.strictEqual(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]); 
// assert.strictEquall(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]); 

//? Psuedocode: return map() with *2

const assert = require('assert')

const maps = x => x.map(item => item * 2)

// function maps(x){
//     return x.map(item => item * 2)
// }
console.log(maps([1, 2, 3]))

assert.strictEqual(maps([1, 2, 3]), [2, 4, 6]);                     //! ask about err
assert.strictEqual(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]); 
assert.strictEquall(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]); 