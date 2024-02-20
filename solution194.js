// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

//? Parameters: a string

//? Return: a string with all lowercase vowles missing

//? Example:
// doTest('hello', 'hll');
// doTest('how are you today?', 'hw r y tdy?');
// doTest('complain', 'cmpln');
// doTest('never', 'nvr');

//? Psuedocode: split('') str
//? filter()
//? condtionals of aeiou
//? join()

const assert = require('assert')

function shortcut (string) {
    return string
    .split('')
    .filter(item => 
        !item.includes('a')  && !item.includes('e') && !item.includes('i') && !item.includes('o') && !item.includes('u'))
    .join('')
  }
console.log(shortcut('hello'))

  assert.strictEqual(shortcut('hello'), 'hll');
  assert.strictEqual(shortcut('how are you today?'), 'hw r y tdy?');
  assert.strictEqual(shortcut('complain'), 'cmpln');
  assert.strictEqual(shortcut('never'), 'nvr');