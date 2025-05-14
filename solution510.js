// Complete the function that takes an array of words.

// You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.

// For example:

// ["yoda", "best", "has"]  -->  "yes"
//   ^        ^        ^
//   n=0     n=1     n=2
// Note: Test cases contain valid input only - i.e. a string array or an empty array; and each word will have enough letters.
const assert = require('assert')

function nthChar(words){
 const findNth = words.map((item, index) => item.charAt(index))
 return findNth.join('')
}
console.log(nthChar(['yoda', 'best', 'has']))
// Input is an array of string that contains random words.
// Output is a string of the nth letter in each string.
    // assert.strictEqual(nthChar([]),'');
    // 6
    // assert.strictEqual(nthChar(['yoda', 'best', 'has']), 'yes')
// Map then use charAt item and index to extract the letter of each word, then join.