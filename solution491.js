// Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization. Then return an array of the found strings.

// The method takes two parameters, the query string and the array of strings to search, and returns an array.

// If the string isn't contained in any of the strings in the array, the method returns an array containing a single string: "Empty" (or Nothing in Haskell, or "None" in Python and C)

// Examples
// If the string to search for is "me", and the array to search is ["home", "milk", "Mercury", "fish"], the method should return ["home", "Mercury"].
const assert = require('assert')

function wordSearch(query, seq) {
    let results = []
    
   const sortItem = seq.map(item => item.toLowerCase().split('').sort().join('').slice(0,query.length) == query ? results.push(item) : null )

   return results == [] ? "Empty" : results
}
console.log(wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"]))
// Input has two parameters one is a string and the other is an array of strings.
// Output is an array of strings that match search item.
assert.strictEqual(wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"]), ["ab", "abc", "zab"])
assert.strictEqual(wordSearch("aB", ["za", "ab", "abc", "zab", "zbc"]), ["ab", "abc", "zab"])
assert.strictEqual(wordSearch("ab", ["za", "aB", "Abc", "zAB", "zbc"]), ["aB", "Abc", "zAB"])
// assert.strictEqual(wordSearch("abcd", ["za", "aB", "Abc", "zAB", "zbc"]), ["Empty"])
// First I will filter the array and use if else to find matches that if true will return the item. Decided to go withassert.strictEqual