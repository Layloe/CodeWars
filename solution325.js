// This method, which is supposed to return the result of dividing its first argument by its second, isn't always returning correct values. Fix it

//? Parameters: two params each a num

//? Return: a sum that is a num 

//? Example:
// assert.strictEqual(solve(2, 1), 2);

//? Pseudocode: debug: divide x from y

const assert = require('assert')

const solve = (x, y) => x / y

console.log(solve(2,1))

assert.strictEqual(solve(2, 1), 2);
assert.strictEqual(solve(2, 4), 0.5);
assert.strictEqual(solve(42, 0), Infinity);
assert.strictEqual(solve(0, 8), 0);
assert.strictEqual(solve(7, 2), 3.5);
assert.strictEqual(solve(4.2, 1), 4.2);
assert.strictEqual(solve(9999, 11), 909);