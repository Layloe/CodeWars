// Modify the spacify function so that it returns the given string with spaces inserted between each character.

// spacify("hello world") // returns "h e l l o   w o r l d"
//? Parameters: astr

//? Return: a string with spaces inbetween the letters

//? Example:
// assert.equal(spacify('hello world'),'h e l l o   w o r l d');
// assert.equal(spacify('12345'),'1 2 3 4 5');

// ? Psuedocode: spit then join str, sounds to easy

const assert = require('assert')

function spacify(str) {
    return str.split('').join(' ')
  }
  console.log(spacify("hello world"))

assert.equal(spacify('hello world'),'h e l l o   w o r l d');
assert.equal(spacify('12345'),'1 2 3 4 5');