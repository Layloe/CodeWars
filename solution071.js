//! Redoing arrays
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

//Parameters: An array of numbers

//Return: The sum of all of the positives ones

//Example:
    // assert.strictEqual(positiveSum([1,2,3,4,5]),15);
    // assert.strictEqual(positiveSum([1,-2,3,4,5]),13);
    // assert.strictEqual(positiveSum([]),0);
    // assert.strictEqual(positiveSum([-1,-2,-3,-4,-5]),0);
    // assert.strictEqual(positiveSum([-1,2,3,4,-5]),9);

//Psuedocode: Use .filter() + .reduce() method

const assert = require('assert')


function positiveSum(arr) {

    return arr.filter(arr => arr >= 0).reduce((sum, current) => sum + current, 0)

    // if (arr.filter(arr => arr >= 0) ) {
    //     return arr.reduce((sum, current) => sum + current, 0)
    // } else {
    //     return 0
    // }
  
}
 
console.log(positiveSum([1,-2,3,4,5]))




    assert.strictEqual(positiveSum([1,2,3,4,5]),15);
    assert.strictEqual(positiveSum([1,-2,3,4,5]),13);
    assert.strictEqual(positiveSum([]),0);
    assert.strictEqual(positiveSum([-1,-2,-3,-4,-5]),0);
    assert.strictEqual(positiveSum([-1,2,3,4,-5]),9);
