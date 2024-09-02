// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28

//? Parameters: a num

//? Return: a num or a str of a num, from test cases

//? Example:
// Test.assertEquals(century(1705), 18, 'Testing for year 1705');

//? Pseudocode: var, Math.ceil, /100 

const assert = require('assert')

function century(year) {
    const round = Math.ceil(year / 100)

    return round
  }
  console.log(century(89))

  //change test to assert.strictEqual
// assert.assertEquals(century(1705), 18, 'Testing for year 1705');
// assert.assertEquals(century(1900), 19, 'Testing for year 1900');
// assert.assertEquals(century(1601), 17, 'Testing for year 1601');
// assert.assertEquals(century(2000), 20, 'Testing for year 2000');
// assert.assertEquals(century(89), 1, 'Testing for year 89');