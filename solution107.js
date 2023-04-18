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

//Parameters: take in an array of nums

//Return:the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

//Example:
// Test.assertEquals(findAverage([1]), 1)
// Test.assertEquals(findAverage([1, 3, 5, 7]), 4)

 //Psuedocode: Use method reduce to add all numbers, find length of arr then divide

//  const assert = require('assert')

function findAverage(nums) {
    let length = nums.length
    // console.log(length)
    let mafs = nums.reduce((sum, current) => sum + current,0)
    return mafs / length
}

console.log(findAverage([1, 3, 5, 7]))




// assert.strictEqual(findAverage([1]), 1)
// assert.strictEqual(findAverage([1, 3, 5, 7]), 4)