// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

//? Prameters: an arr of nums

//? Return: the sum of all of the positives nums

//? Example:
// assert.strictEqual(positiveSum([1,2,3,4,5]),15);
// assert.strictEqual(positiveSum([1,-2,3,4,5]),13);
// assert.strictEqual(positiveSum([]),0);
// assert.strictEqual(positiveSum([-1,-2,-3,-4,-5]),0);
// assert.strictEqual(positiveSum([-1,2,3,4,-5]),9);

//? Psuedocode:create a varible to filer out all postive nums
//? reduce()

function positiveSum(arr) {
    const positiveNums = arr.filter(item => item % 2 == 0)
    return positiveNums.reduce((sum, curr) => curr + sum)
  
}
console.log(positiveSum([1,2,3,4,5]),15)

// assert.strictEqual(positiveSum([1,2,3,4,5]),15);
// assert.strictEqual(positiveSum([1,-2,3,4,5]),13);
// assert.strictEqual(positiveSum([]),0);
// assert.strictEqual(positiveSum([-1,-2,-3,-4,-5]),0);
// assert.strictEqual(positiveSum([-1,2,3,4,-5]),9);