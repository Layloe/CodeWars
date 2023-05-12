// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// For Example:

// [ [ 1, 2, 3, 4, 5 ]        
// , [ 5, 6, 7, 8, 9 ]        
// , [ 20, 21, 34, 56, 100 ] 
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

// Note: You will always be given a non-empty list containing positive values.

// Parameters: Nested arr of nums

// Return: the sum of the minimum values in each row then add them to get the sum

// Example:
// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]

// Psuedocode: Use methods map and reduce to get sum
// const assert = require('assert')

//? Learned that sorting nested arrays isn't as stright forward as I thought, was close but called time

function sumOfMinimums(arr) {

  return arr.reduce((a, b) => a + Math.min(...b), 0)

    // let minNums = arr.map((value, index) => value[0])
    // // minNums.sort(((a, b) => a - b))
    
    // console.log(minNums)

    // return minNums.reduce(((sum, current) => sum + current))
    // .Math.min(arr)
    
  }

  console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]))

  // assert.strictEqual(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]), 9)
  // assert.strictEqual(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]), 76)