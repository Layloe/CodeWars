// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

//? Parameters: Takes in multible integers

//? Return: transform integers into a str

//? Example:
// assert.strictEqual(numberToString(67), '67')

//? Psuedocode: test diffrent data types-- review practice

const assert = require('assert')

function numberToString(num) {
    // return num.toString()
    return `${num}`
 
  }

  console.log(numberToString(67))

  assert.strictEqual(numberToString(67), '67')