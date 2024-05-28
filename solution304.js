// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

// Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
// If a and b have the same length treat a as the longer producing b+reverse(a)+b

//? Parameters: two prams both strings that need to be organized  as: shorter + reverse(longer) + shorter

//? Return: return a string of the form: shorter + reverse(longer) + shorter

//? Example:
// assert.strictEqual(shorterReverseLonger("first", "abcde"), "abcdetsrifabcde", 'Incorrect answer for a="first", b="abcde"');
// assert.strictEqual(shorterReverseLonger("hello", "bau"  ), "bauollehbau"    , 'Incorrect answer for a="hello", b="bau"'  );
// assert.strictEqual(shorterReverseLonger("fghi",  "abcde"), "fghiedcbafghi"  , 'Incorrect answer for a="fghi", b="abcde"' );

//? Pseudocode: 2 vars split
// map
// length conditionals
// reverse
// join
 const assert = require('assert')
 
function shorterReverseLonger(a,b){

    return a.length >= b.length ?
    b + a.split('').reverse().join('') + b :
    a + b.split('').reverse().join('') + a

    }        
console.log(shorterReverseLonger("hello", "bau"))

  assert.strictEqual(shorterReverseLonger("first", "abcde"), "abcdetsrifabcde", 'Incorrect answer for a="first", b="abcde"');
  assert.strictEqual(shorterReverseLonger("hello", "bau"  ), "bauollehbau"    , 'Incorrect answer for a="hello", b="bau"'  );
  assert.strictEqual(shorterReverseLonger("fghi",  "abcde"), "fghiedcbafghi"  , 'Incorrect answer for a="fghi", b="abcde"' );