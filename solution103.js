// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

//Parameters: an array of numbers

//Return: an array of numbers that removes duplicates 

//Example:
// assert.deepEqual(distinct([1]), [1]);
// assert.deepEqual(distinct([1,2]), [1,2]);
// assert.deepEqual(distinct([1,1,2]), [1,2]);

//Psuedocode: Use method filter and indexOf to compare if any duplicates 

const assert = require('assert')

function distinct(a) {
  
    return a.filter((value, index) => a.indexOf(value) === index)
    
  }

console.log(distinct([1,1,2]))

  assert.deepEqual(distinct([1]), [1]);
  assert.deepEqual(distinct([1,2]), [1,2]);
  assert.deepEqual(distinct([1,1,2]), [1,2]);