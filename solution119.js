// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

// Parameters:an arr of nums

// Return: values of an array that are not odd

// Example:
// assert.deepEqual( noOdds( [0,1] ), [0] )
// assert.deepEqual( noOdds( [0,1,2,3] ), [0,2] )

// Psuedocode: use filter method to compare if the value can be divided by 2 **use modulus insead of divide

//? Kept forgeting to use % instead of /

const assert = require('assert')


function noOdds( values ){
    // let test = []
    return values.filter((value) => value % 2 === 0  )
    // console.log(test)
  }

  console.log(noOdds([0,1,2,3]))

assert.deepEqual( noOdds( [0,1] ), [0] )
assert.deepEqual( noOdds( [0,1,2,3] ), [0,2] )