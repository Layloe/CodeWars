// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

//? Prameters: an arr of nums

//? Return: a multiplied sum of the array

//? Example:
// assert.strictEqual(grow([1, 2, 3]), 6);
// assert.strictEqual(grow([4, 1, 1, 1, 4]), 16); 
// assert.strictEqual(grow([2, 2, 2, 2, 2, 2]), 64);

//? Psuedocode: reduce() with * and the index set to 1 instead of zero. This way the reduce function will start the iteration index 1 allowing it to multiply through put the array

const assert = require('assert')

// const grow = x => x.reduce((sum, curr) => sum * curr, 1)

function grow(x){
    return x.reduce((sum,curr) => sum * curr , 1)
}
console.log(grow([4, 1, 1, 1, 4]))

assert.strictEqual(grow([1, 2, 3]), 6);
assert.strictEqual(grow([4, 1, 1, 1, 4]), 16); 
assert.strictEqual(grow([2, 2, 2, 2, 2, 2]), 64);