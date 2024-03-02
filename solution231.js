// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

//? Prameters: an arr of postive and negitive nums

//? Return: the sum of the arr

//? Example:
// Test.assertEquals(sum([]), 0);
// Test.assertEquals(sum([1, 5.2, 4, 0, -1]), 9.2);

//? Psuedocode: use method reduce()

const assert = require('assert')
// const sum = number => number.reduce((sum, curr) => sum + curr, 0)

function sum (numbers) {
    
    return numbers.reduce((sum, curr) => sum + curr, 0)
};
console.log(sum([]))

assert.strictEqual(sum([]), 0);
assert.strictEqual(sum([1, 5.2, 4, 0, -1]), 9.2);