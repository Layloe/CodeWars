// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

//Parameters: an arr of nums

//Return:the sum of all of the positives ones

//Example:
// assert.strictEqual(positiveSum([1,2,3,4,5]),15);
// assert.strictEqual(positiveSum([1,-2,3,4,5]),13);
// assert.strictEqual(positiveSum([]),0);
// assert.strictEqual(positiveSum([-1,-2,-3,-4,-5]),0);
// assert.strictEqual(positiveSum([-1,2,3,4,-5]),9);

//Psuedocode: add the arr using reduce method then use ifelse to filter our the negative nums

const assert = require('assert')


function positiveSum(arr) {
    // const negativeNums = negativeNums ? negativeNums <=



    return arr.reduce((sum,current) => sum + (current > 0 ? current : 0), 0 )
  
}

console.log(positiveSum([1,-2,3,4,5]))

assert.strictEqual(positiveSum([1,2,3,4,5]),15);
assert.strictEqual(positiveSum([1,-2,3,4,5]),13);
assert.strictEqual(positiveSum([]),0);
assert.strictEqual(positiveSum([-1,-2,-3,-4,-5]),0);
assert.strictEqual(positiveSum([-1,2,3,4,-5]),9);
