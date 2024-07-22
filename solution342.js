// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//? Parameters: a boolean

//? Return: one of two strings "yes" or "no"

//? Example:
// assert.strictEqual(boolToWord(true), 'Yes')
// assert.strictEqual(boolToWord(false), 'No')

//? Pseudocode: if else

const assert = require('assert')

// const boolToWord = bool => bool == true ? "Yes" : "No"

function boolToWord(bool){
    if (bool == true) {
        return "Yes"
    } else {
        return "No"
    }
  }
  console.log(boolToWord(false))

  assert.strictEqual(boolToWord(true), 'Yes')
  assert.strictEqual(boolToWord(false), 'No')