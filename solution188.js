// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

//? Parameters: a string

//? Return:a string in which each character (case-sensitive) is repeated once

//? Example:
// Test.assertEquals(doubleChar("abcd"), "aabbccdd");
// Test.assertEquals(doubleChar("Adidas"), "AAddiiddaass");
// Test.assertEquals(doubleChar("1337"), "11333377");
// Test.assertEquals(doubleChar("illuminati"), "iilllluummiinnaattii");
// Test.assertEquals(doubleChar("123456"), "112233445566");
// Test.assertEquals(doubleChar("%^&*("), "%%^^&&**((");

//? Psuedocode: use methods split('') map().repeat().join('')

const assert = require('assert')

// const doubleChar = str => str.split('').map(item => item.repeat(2)).join('')

function doubleChar(str) {

    return str.split('').map(item => item.repeat(2)).join('')
  }
  
console.log(doubleChar("abcd"))

assert.strictEqual(doubleChar("abcd"), "aabbccdd");
assert.strictEqual(doubleChar("Adidas"), "AAddiiddaass");
assert.strictEqual(doubleChar("1337"), "11333377");
assert.strictEqual(doubleChar("illuminati"), "iilllluummiinnaattii");
assert.strictEqual(doubleChar("123456"), "112233445566");
assert.strictEqual(doubleChar("%^&*("), "%%^^&&**((");