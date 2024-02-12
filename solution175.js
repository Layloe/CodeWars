// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

//? Parameters: takes in a boolean

//? Return: returns the boolean in a string form

//? Example:
// Test.assertEquals(booleanToString(true), "true", 'When we pass in true, we want the string "true" as output');
// Test.assertEquals(booleanToString(false), "false", 'When we pass in false, we want the string "false" as output');

//? Psuedocode: ifelse equals == true return a string representaion of a boolean "true" else return "false"

const assert = require('assert')

// const booleanToString = b => b == true ? "true" : "false"

function booleanToString(b){
    if (b == true) {
        return "true"
    } else {
        return "false"
    }
  }
  console.log(booleanToString(true))

  assert.strictEqual(booleanToString(true), "true", 'When we pass in true, we want the string "true" as output');
  assert.strictEqual(booleanToString(false), "false", 'When we pass in false, we want the string "false" as output');