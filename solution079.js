// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

//Parameters: Arrray of intergers

//Return: The result of multiplying the values together in order.

//Example:
// assert.strictEqual(grow([1, 2, 3]), 6);
// assert.strictEqual(grow([4, 1, 1, 1, 4]), 16); 
// assert.strictEqual(grow([2, 2, 2, 2, 2, 2]), 64); 

//Psuedocode: Use method reduce(x)

const assert = require('assert')




function grow(x){

    return x.reduce((sum, current) => sum * current)

}

console.log(grow([1, 2, 3]))

assert.strictEqual(grow([1, 2, 3]), 6);
assert.strictEqual(grow([4, 1, 1, 1, 4]), 16); 
assert.strictEqual(grow([2, 2, 2, 2, 2, 2]), 64); 