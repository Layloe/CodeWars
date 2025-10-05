// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
const assert = require('assert')

function reverseWords(str) {
    const reverseItems = str.split(' ').map(item => {
      return item.split('').reverse().join('')
    })
    return reverseItems.join(' ')
}
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))
// Input is a string.
// Output is the input string bit with each word reversed.
    assert.strictEqual(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god', `Input: "The quick brown fox jumps over the lazy dog."`);
    assert.strictEqual(reverseWords('apple'), 'elppa', `Input: "apple"`);
    assert.strictEqual(reverseWords('a b c d'), 'a b c d', `Input: "a b c d"`);
    assert.strictEqual(reverseWords('  double  spaced  words  '), '  elbuod  decaps  sdrow  ', `Input: "  double  spaced  words  "`);
// Split with white space and map reverse and join then join with white space.