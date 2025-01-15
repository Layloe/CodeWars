// Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization. Then return an array of the found strings.

// The method takes two parameters, the query string and the array of strings to search, and returns an array.

// If the string isn't contained in any of the strings in the array, the method returns an array containing a single string: "Empty" (or Nothing in Haskell, or "None" in Python and C)

// Examples
// If the string to search for is "me", and the array to search is ["home", "milk", "Mercury", "fish"], the method should return ["home", "Mercury"].
const assert = require('assert')
function wordSearch(query, seq){
    const findMatches = seq.filter(item => item.toLowerCase().includes(query.toLowerCase()))

    return findMatches.length ? findMatches : []
  }
  console.log(wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"]))
  // input will have two parameters the query string and the array of strings to search
  // output will be an array with all the matches
assert.deepStrictEqual(wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"]), ["ab", "abc", "zab"]);
assert.deepStrictEqual(wordSearch("aB", ["za", "ab", "abc", "zab", "zbc"]), ["ab", "abc", "zab"]);
assert.deepStrictEqual(wordSearch("ab", ["za", "aB", "Abc", "zAB", "zbc"]), ["aB", "Abc", "zAB"]);
assert.deepStrictEqual(wordSearch("abcd", ["za", "ab", "abc", "zab", "zbc"]), []);
  // Thinking of going with filter, conditionals and method includes
   