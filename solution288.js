// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

//? Parameters: a str

//? Return: the str reversed 

//? Example:
// assert.strictEqual(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
// assert.strictEqual(reverseWords('apple'), 'elppa');
// assert.strictEqual(reverseWords('a b c d'), 'a b c d');
// assert.strictEqual(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');

//? Pseudocode: split(' ')
//? map().reverse().join('') reverse only works as an arr, need to turn each item into an array then reverse

// const assert = require('assert')

function reverseWords(str) {
    const reverseWords = str.split(' ').map(item => 
        item.split('').reverse().join('')
    ).join(' ')

    return reverseWords
  }
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))

//   assert.strictEqual(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
//   assert.strictEqual(reverseWords('apple'), 'elppa');
//   assert.strictEqual(reverseWords('a b c d'), 'a b c d');
//   assert.strictEqual(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');