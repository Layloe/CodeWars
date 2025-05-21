// Your task is to return an output string that translates an input string s by replacing each character in s with a number representing the number of times that character occurs in s and separating each number with the sep character(s).

// Example (s, sep --> Output)

// "hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
// "19999999"   , ":" --> "1:7:7:7:7:7:7:7"
// "^^^**$"     , "x" --> "3x3x3x2x2x1"
const assert = require('assert')

function freqSeq(str, sep) {
  const findFreq = str.split('').map((item, index, arr) => arr.filter(items => items == item).length)
  //   let freqOfEachChar = {}
  //   const splitStr = str.split('')
  //   for (item of splitStr) {
  //     if (freqOfEachChar[item]) {
  //       freqOfEachChar[item]++
  //     } else {
  //       freqOfEachChar[item] = 1
  //     }
  //   }
  return findFreq.join(sep)
  // return freqOfEachChar
  // Object.values(freqOfEachChar).join(sep)
}
console.log(freqSeq('hello world', '-'))
// Input has two params one being a string of random words the other a single char of a string that will work as a delimiter.
// Output is a string with a number that indicates how frequent the letter appears with using the second param as delimiter.
    assert.strictEqual(freqSeq('hello world', '-'), '1-1-3-3-2-1-1-2-1-3-1');
    assert.strictEqual(freqSeq('19999999',    ':'), '1:7:7:7:7:7:7:7');
    assert.strictEqual(freqSeq('^^^**$',      'x'), '3x3x3x2x2x1');
// Split map and create a mutable var that will hold [] then use a counter to push num to empty arr and finally join with second param.