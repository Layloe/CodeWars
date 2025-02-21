// Complete the function that takes an array of words.

// You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.

// For example:

// ["yoda", "best", "has"]  -->  "yes"
//   ^        ^        ^
//   n=0     n=1     n=2
// Note: Test cases contain valid input only - i.e. a string array or an empty array; and each word will have enough letters.
const assert = require('assert')
function nthChar(words){
    let concatOfLetters = []
    // const concatOfWords = words.reduce((sum, curr, index) =>  )]
      
    return words.map((item, index) => item[index]).join('')
 }       
   console.log(nthChar(['yoda', 'best', 'has']))
// input will be an array of strings of random words
// output will be a string/word of a concat of one char from each word
    assert.strictEqual(nthChar([]),'');
    assert.strictEqual(nthChar(['yoda', 'best', 'has']), 'yes'); 
// declare a var that will hold logic then use map and figure how to make a counter. Hit my time limit and had to look at the answers and apparently map => item[index] counts the index as well. The more you know :)

function remember(words) {
    return words.map((item,index) => item[index]).join('')
}
console.log(remember(['yoda', 'best', 'has']))