// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.
const assert = require('assert')

function getSum(a, b){
    const parseDataA = [a].reduce((acc, curr) => curr + acc, 0)
    const parseDataB = [b].reduce((acc, curr) => curr + acc, 0)
    if (a === b) {
        return a
    }

   return parseDataA + parseDataB
}
console.log(getSum(5,-1))
// Input had two parameters and both are positive or negative numbers.
// Output is a number sum or if the two parameters are the same number return the first parameter.
// Examples above.
    assert.strictEqual(getSum(0,-1), -1);
    assert.strictEqual(getSum(0, 1),  1);
    assert.strictEqual(getSum(2, 2),  2);
// Create a conditional that compares the two parameters and if equal return the first parameter. Reduce the two parameters. Possibly concat params.