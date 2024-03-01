
// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

//? Prameters:  a string 

//? Return:  number data type 

//? Example:
// Test.assertSimilar(getNumberFromString("1"), 1);
// Test.assertSimilar(getNumberFromString("123"), 123);
// Test.assertSimilar(getNumberFromString("this is number: 7"), 7);

//? Psuedocode:filter() '1234567890'
//? split('')
//? join('')
//? Number(item)
const util= require('util')
const assert = require('assert')

function getNumberFromString(s) {
    const numStr = s.split('').filter(item => '1234567890'.includes(item)).join('')
    return Number(numStr)
    
  }
  console.log(util.inspect(getNumberFromString("hell5o wor6ld")))

  assert.strictEqual(getNumberFromString("1"), 1);
  assert.strictEqual(getNumberFromString("123"), 123);
  assert.strictEqual(getNumberFromString("this is number: 7"), 7);