// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

//Parameters: arr of integers

//Example:
// [1, 2, 3] --> [2, 4, 6]

//Return: a new array with each value doubled.

//Pseudocode: Use method map with some mafs *2

const assert = require('assert')

function maps(x){
    const doubleArr = x.map(value => value *2)
    return doubleArr
}

console.log(maps([1, 2, 3]))

assert.deepEqual(maps([1, 2, 3]), [2, 4, 6]);
assert.deepEqual(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]); 
assert.deepEqual(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]);