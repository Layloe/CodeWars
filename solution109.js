// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

//Parameters: arr of nums

//Return: a function which calculates the average of the numbers in a given list.

//Example:
// assert.strictEqual(findAverage([1,1,1]), 1);
// assert.strictEqual(findAverage([1,2,3]), 2);
// assert.strictEqual(findAverage([1,2,3,4]), 2.5);

//Psuedocode: Use method reduce to get sum of arr then divide by length

const assert = require('assert')


function findAverage(array) {
    let length = array.length
    let total = array.reduce((sum, current) => sum + current, 0)
     if (array.length == 0) {
        return 0
     } else {
        return total / length   
     }
 
    
    
  }

console.log(findAverage([1,2,3]))
  assert.strictEqual(findAverage([1,1,1]), 1);
  assert.strictEqual(findAverage([1,2,3]), 2);
  assert.strictEqual(findAverage([1,2,3,4]), 2.5);