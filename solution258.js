// Find Mean
// Find the mean (average) of a list of numbers in an array.

// Information
// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

// For an example list of 1, 3, 5, 7

// 1. Add all of the numbers

// 1+3+5+7 = 16
// 2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

// 16/4 = 4
// 3. The mean (or average) of this list is 4

//? Prameters: an arr of num

//? Return: return mafs, the mean

//? Example:
// Test.assertEquals(findAverage([1]), 1)
// Test.assertEquals(findAverage([1, 3, 5, 7]), 4)

//? Psuedocode: declare a var for length
// reduce()
// const assert = require('assert')

var findAverage = function (nums) { 
    const reduceArr = nums.reduce((sum, curr) => sum + curr, 0)
    return reduceArr / nums.length
  }
console.log(findAverage([1]))

// assert.strictEqual(findAverage([1]), 1)
// assert.strictEqual(findAverage([1, 3, 5, 7]), 4)