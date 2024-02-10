
// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7


//? Parameters: takes in a string of numbers

//? Return: convert or transform a string to a number

//? Example:
// Test.assertEquals(stringToNumber("1234"),1234)
// Test.assertEquals(stringToNumber("605"), 605)
// Test.assertEquals(stringToNumber("1405"),1405)
// Test.assertEquals(stringToNumber("-7"),  -7)

//? Psuedocode: Use constructor/method Number() and pass in str as the argument.

const assert = require('assert')

  function stringToNumber(str){
    
    return Number(str)
  }

  console.log(stringToNumber("1234"))

  assert.strictEqual(stringToNumber("1234"),1234) //? Has to fix test case syntax from: Test.assertEquals to assert.strictEqual 
  assert.strictEqual(stringToNumber("605"), 605)
  assert.strictEqual(stringToNumber("1405"),1405)
  assert.strictEqual(stringToNumber("-7"),  -7)