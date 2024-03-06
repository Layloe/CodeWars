// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 

//? Prameters: an array of nums

//? Return: a number that is the sum of the arr squared

//? Example:
// assert.strictEqual(squareSum([1,2]), 5);
// assert.strictEqual(squareSum([0, 3, 4, 5]), 50);
// assert.strictEqual(squareSum([]), 0);

//? Psuedocode: reduce through arr with the method Math.pow or **2 shorcut
 const assert = require('assert')

// const squareSum = numbers => numbers.reduce((sum, curr) => sum + curr **2, 0)

function squareSum(numbers){
    return numbers.reduce((sum,curr) => sum + curr **2 , 0)
}
console.log(squareSum([0, 3, 4, 5]))

assert.strictEqual(squareSum([1,2]), 5);
assert.strictEqual(squareSum([0, 3, 4, 5]), 50);
assert.strictEqual(squareSum([]), 0);



