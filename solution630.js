// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

const assert = require('assert')

function isPalindrome(x) {

    return x.toLowerCase().split('').reverse().join('') === x.toLowerCase()
}
console.log(isPalindrome('racecar'))

// Input is a string.
// Output is a boolean.
  assert.strictEqual(isPalindrome("a"), true);
  assert.strictEqual(isPalindrome("aba"), true);
  assert.strictEqual(isPalindrome("Abba"), true);
  assert.strictEqual(isPalindrome("hello"), false);
  assert.strictEqual(isPalindrome("Bob"), true);
  assert.strictEqual(isPalindrome("Madam"), true);
  assert.strictEqual(isPalindrome("AbBa"), true);
  assert.strictEqual(isPalindrome(""), true);
// Argument to lower case, split, reverse, and join. Then parameter to lower case and compare.