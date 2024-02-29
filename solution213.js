// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.
//? Prameters: an array of num

//? Return: if any of the numbers are the character codes for lower case vowels (a, e, i, o, u), If they are, change the array value to a string of that vowel

//? Example:
// Test.assertSimilar(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]),[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]);
// Test.assertSimilar(isVow([101,121,110,113,113,103,121,121,101,107,103]),["e",121,110,113,113,103,121,121,"e",107,103]);

//? Psuedocode: first find all vowels char code.. nope doesn't have 'i' num -->
//? map
//? if charCodeAt() is equal to 'aeiou'
//? replaceAll() 

const assert = require('assert')

function isVow(a){
//     const vowels = String.fromCharCode(item)            //! ran out of time
//   return  a.map(item => 'aeiou'.includes(vowels) ?  vowels : item ) 
  return a.map(x=>'aeiou'.includes(y=String.fromCharCode(x)) ? y : x)
}
console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]))

assert.strictEqual(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]),[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]);
assert.strictEqual(isVow([101,121,110,113,113,103,121,121,101,107,103]),["e",121,110,113,113,103,121,121,"e",107,103]);
