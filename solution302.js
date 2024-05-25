// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

//? Parameters:  an array of numbers

//? Return: a Number with the most digits/length, if dups first num

//? Example:
// Test.assertEquals(findLongest([1, 10, 100]), 100)
// Test.assertEquals(findLongest([9000, 8, 800]), 9000)
// Test.assertEquals(findLongest([8, 900, 500]), 900)

//? Pseudocode: var sort()
//filter 
// conditionals if dups length 

const assert = require('assert')

function findLongest(array){
    const sortNum =  [...new Set(array.sort())].slice(-1)
  
    return Number(sortNum)
    
  }
console.log(findLongest([9000, 8, 800, 9000]))

assert.strictEqual(findLongest([1, 10, 100]), 100)
assert.strictEqual(findLongest([9000, 8, 800]), 9000)
assert.strictEqual(findLongest([8, 900, 500]), 900)