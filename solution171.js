// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

//? Parameters: one parameter that takes in a str

//? Return: the string with the first and last characters removed

//? Example:
// assert.strictEqual(removeChar('eloquent'), 'loquen');
// assert.strictEqual(removeChar('country'), 'ountr');
// assert.strictEqual(removeChar('person'), 'erso');
// assert.strictEqual(removeChar('place'), 'lac');
// assert.strictEqual(removeChar('ooopsss'), 'oopss');

//? Psuedocode: return string with the slice() method and use index 1 to start the slice after the first char and index -1 as the second argument to start at the end of the arr.
//  or use startsWith() and endsWith()  methods. 

const assert = require('assert')

// const remChar = str => str.slice(0, -1)

function removeChar(str){
    return str.slice(1, -1)
   
   };
   console.log(removeChar('eloquent'))

assert.strictEqual(removeChar('eloquent'), 'loquen');
assert.strictEqual(removeChar('country'), 'ountr');
assert.strictEqual(removeChar('person'), 'erso');
assert.strictEqual(removeChar('place'), 'lac');
assert.strictEqual(removeChar('ooopsss'), 'oopss');