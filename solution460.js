// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
const assert = require('assert')

function reverseWords(str) {
    let reversedItems = []
    const reverseConversion = str.split('').reverse().map((item, index) => {
        let reverse = [item].reverse()
        reversedItems.push(reverse)
    })
    return reversedItems.join('').split(' ').reverse().join(' ')
}
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))
// Input will be string  of random words or letters
// Output is a string that will reverse the individual item separated by spaces
// assert.strictEqual(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
assert.strictEqual(reverseWords('apple'), 'elppa');
assert.strictEqual(reverseWords('a b c d'), 'a b c d');
assert.strictEqual(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
// First thing is to split by white space then map to an array in a var, then create a mutable var that will contain the reversed string. Reverse each item and push to empty arr finally join