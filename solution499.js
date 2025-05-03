// Given a string of space separated words, return the longest word.
// If there are multiple longest words, return the rightmost longest word.

// Examples
// "red white blue"  =>  "white"
// "red blue gold"   =>  "gold"
const assert = require('assert')

function longestWord(stringOfWords) {
    const sortWords = stringOfWords.split(' ').sort((a,b) => a.length - b.length).slice(-1)

    return String(sortWords)
  }
  console.log(longestWord('one two three'))
// Input is going to be a string of words.
// Output will be the longest word.
    assert.strictEqual(longestWord('a pair') , 'pair')
    assert.strictEqual(longestWord('a b c d e fgh') , 'fgh')
    assert.strictEqual(longestWord('one two three') , 'three')
    assert.strictEqual(longestWord('red blue grey') , 'grey')
// First thing to so is split map then sort by length then slice -1