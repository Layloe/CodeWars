// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

// Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
// If a and b have the same length treat a as the longer producing b+reverse(a)+b
const assert = require('assert')

function shorterReverseLonger(a,b){
    if (a.length === b.length) {
        return `${b}${a.split('').reverse().join('')}${b}`
    }
    if (a.length >= b.length) {
        return `${b}${a.split('').reverse().join('')}${b}`
    }
    if (a.length <= b.length) {
        return `${a}${b.split('').reverse().join('')}${a}`
    }
  }
  console.log(shorterReverseLonger('first', 'abcde'))
  // Input will have two parameters both containing strings
  // Output is is a single string that will contain both params in a "shorter+reverse(longer)+shorter" structure.
    assert.strictEqual(shorterReverseLonger("first", "abcde"), "abcdetsrifabcde",  'Incorrect answer for a="first", b="abcde"');
    assert.strictEqual(shorterReverseLonger("hello", "bau"  ), "bauollehbau"    , 'Incorrect answer for a="hello", b="bau"'  );
    assert.strictEqual(shorterReverseLonger("fghi",  "abcde"), "fghiedcbafghi"  , 'Incorrect answer for a="fghi", b="abcde"' );
// First figure out what param is the longest, then use conditionals on what param will go where.