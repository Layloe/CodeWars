// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

// Parameters: arr of nums

// Return: arr of even nums

// Example:
// assert.deepEqual(getEvenNumbers([1,2,3,6,8,10]), [2,6,8,10])
// assert.deepEqual(getEvenNumbers([1,2]), [2])
// assert.deepEqual(getEvenNumbers([12,14,15]), [12,14])
// assert.deepEqual(getEvenNumbers([13,15]), [])
// assert.deepEqual(getEvenNumbers([1,3,9]), [])

// Psuedocode: Use filter method and compare with modulus operator

//? Sometimes you get lucky and get a duplicate of a challenge.

const assert = require('assert')

function getEvenNumbers(numbersArray){

    return numbersArray.filter((value) => value % 2 === 0  )

  }

  console.log(getEvenNumbers([1,2,3,6,8,10]))

  assert.deepEqual(getEvenNumbers([1,2,3,6,8,10]), [2,6,8,10])
assert.deepEqual(getEvenNumbers([1,2]), [2])
assert.deepEqual(getEvenNumbers([12,14,15]), [12,14])
assert.deepEqual(getEvenNumbers([13,15]), [])
assert.deepEqual(getEvenNumbers([1,3,9]), [])