// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

//? Parameters: a string 

//? Return: a boolean if string contains lowercase

//? Example:
// assert.strictEqual('Hello World'.isUpperCase(), false, 'Hello World is not upper case');
// assert.strictEqual('hello world'.isUpperCase(), false, 'hello world is not upper case');
// assert.strictEqual('Hello world'.isUpperCase(), false, 'Hello world is not upper case');
// assert.strictEqual('hello World'.isUpperCase(), false, 'hello World is not upper case');
// assert.strictEqual('HELLO WORLD'.isUpperCase(), true, 'HELLO WORLD is upper case');

//? Psuedocode: fix function
//? compare str == str.toUpperCase(str)
//? fix tests

const assert = require('assert')

function isUpperCase (str) {
    return str == str.toUpperCase(str)
  }
console.log(isUpperCase('HELLO WORLD'))

assert.strictEqual(isUpperCase('Hello World'), false) 
assert.strictEqual(isUpperCase('hello world'), false) 
assert.strictEqual(isUpperCase('HELLO WORLD'), true)

