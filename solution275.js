// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

//? Prameters: two params both arrays with numbers

//? Return: concat both arrays and remove dups

//? Example:
// assert.deepEqual(mergeArrays([1, 3, 5], [2, 4, 6]), [1, 2, 3, 4, 5, 6]);
// assert.deepEqual(mergeArrays([2, 4, 8], [2, 4, 6]), [2, 4, 6, 8]);

//? Psuedocode: use spread operator on both params
//? [...new Set] to remove dups
//? sort()

const assert = require('assert')

function mergeArrays(a, b) {  
    const concat = [...a, ...b].sort((a, b) => a - b)
    return [ ...new Set(concat)]
    
  }
console.log(mergeArrays([1, 3, 5], [2, 4, 6]))

  assert.deepEqual(mergeArrays([1, 3, 5], [2, 4, 6]), [1, 2, 3, 4, 5, 6]);
  assert.deepEqual(mergeArrays([2, 4, 8], [2, 4, 6]), [2, 4, 6, 8]);