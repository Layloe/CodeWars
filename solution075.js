// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

//Parameters: An array of integers

//Return: a new array with each value doubled

//Example:
// assert.deepEqual(maps([1, 2, 3]), [2, 4, 6]);
// assert.deepEqual(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]); 
// assert.deepEqual(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]); 

//Psuedocode: Use method map * 2

const assert = require('assert')


function maps(x){
    return x.map(x => x*2)
}



console.log(maps([1, 2, 3]))


assert.deepEqual(maps([1, 2, 3]), [2, 4, 6]);
assert.deepEqual(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]); 
assert.deepEqual(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]); 