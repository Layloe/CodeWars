// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

//? Prameters: an array of integers

//? Return: two nums, one num counts all positive nums in arr and the second sums all the negitive nums

//? Example:
// let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
// let actual = countPositivesSumNegatives(testData);
// let expected = [10, -65];

//? Psuedocode: declare a var with ifelse length
//? filter()
//? reduce()
//? fix edge cases

// const assert = require('assert')

function countPositivesSumNegatives(input) {
    if (input == null || input == 0 ) {return []}
    const posNums = input.filter(item => item >= 1 ).length
    const negNums = input.filter(item => item <= 0 ).reduce((sum, curr) => sum + curr, 0)
    
    return [posNums, negNums]
  }
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))

//   assert.strictEqual(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]),[8, -50])
//   let actual = countPositivesSumNegatives(testData);
//   let expected = [10, -65];