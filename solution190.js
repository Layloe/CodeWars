// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// str_count("Hello", 'o'); // returns 1
// str_count("Hello", 'l'); // returns 2
// str_count("", 'z'); // returns 0
// Notes
// The first argument can be an empty string
// In languages with no distinct character data type, the second argument will be a string of length 1


//? Parameters: two params one a string other a char

//? Return: a number for how  many times the char is found in the string

//? Example:
// assert.strictEqual(strCount('Hello', 'o'), 1);
// assert.strictEqual(strCount('Hello', 'l'), 2);
// assert.strictEqual(strCount('',      'z'), 0);

//? Psuedocode: split('') the string with char then use length -1 to get num

const assert =require('assert')

// const strCount = (str,letter) => str.split(letter).length -1

function strCount(str, letter){  

    return  str.split(letter).length -1
  }
console.log(strCount('Hello', 'l'))

  assert.strictEqual(strCount('Hello', 'o'), 1);
  assert.strictEqual(strCount('Hello', 'l'), 2);
  assert.strictEqual(strCount('',      'z'), 0);