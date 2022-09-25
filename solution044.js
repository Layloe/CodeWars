// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

//Parameters:
//Return:
//Example:
//     assert.strictEqual(positiveSum([1,2,3,4,5]),15);
//     assert.strictEqual(positiveSum([1,-2,3,4,5]),13);
//     assert.strictEqual(positiveSum([]),0);
//     assert.strictEqual(positiveSum([-1,-2,-3,-4,-5]),0);
//     assert.strictEqual(positiveSum([-1,2,3,4,-5]),9);
//Psudocode:

function positiveSum(arr) {

   console.log (arr.reduce((sum , current) => sum  + (current > 0 ? current : 0) , 0 ))
  
}

positiveSum([1,2,3,4,5])

