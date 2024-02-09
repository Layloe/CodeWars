// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

//? Parameters: two parameters one a number and the other a string

//? Return: a str that is repeated or multiplied by the number in the second parameter

//? Example:
// assert.strictEqual(repeatStr(3, "*"), "***");
// assert.strictEqual(repeatStr(5, "#"), "#####");
// assert.strictEqual(repeatStr(2, "ha "), "ha ha ");

//? Psuedocode: apply the method repeat() to the str parameter and pass in the parameter num as the argument 

const assert = require('assert')

function repeatStr (n, s) {
    return s.repeat(n)
  }
  console.log(repeatStr(3, "*"))

assert.strictEqual(repeatStr(3, "*"), "***");
assert.strictEqual(repeatStr(5, "#"), "#####");
assert.strictEqual(repeatStr(2, "ha "), "ha ha ");