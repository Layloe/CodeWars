// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//? Parameters: a string with exclamtion marks

//? Return: a string without exclamtion marks


//? Example:
// assert.strictEqual(removeExclamationMarks("Hello World!"), "Hello World")

//? Psuedocode: use method spllit('!') with ! as the dilimter then join()
const assert = require('assert')

// const removeExclamationMarks = s => s.split('!').join('')

function removeExclamationMarks(s) {
    return s.split('!').join('')
  }
console.log(removeExclamationMarks("Hello World!"))

  assert.strictEqual(removeExclamationMarks("Hello World!"), "Hello World")