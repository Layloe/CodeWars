// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

//? Parameters: a string of two words with one space in between them

//? Return: return a string with the first letter of each word

//? Example:
// assert.strictEqual(abbrevName("Sam Harris"), "S.H");
// assert.strictEqual(abbrevName("Patrick Feenan"), "P.F");
// assert.strictEqual(abbrevName("Evan Cole"), "E.C");
// assert.strictEqual(abbrevName("P Favuzzi"), "P.F");
// assert.strictEqual(abbrevName("David Mendieta"), "D.M");

//? Psuedocode: make string an array that had two values then get the index 0 of each value then join('.'). 

const assert = require('assert')

// const abbrevName = name => name.split(' ').map(item => item[0]).join('.')

function abbrevName(name){

    return name.split(' ').map(item => item[0]).join('.')         //!  Add to Anki

}
console.log(abbrevName("Sam Harris"))


assert.strictEqual(abbrevName("Sam Harris"), "S.H");
assert.strictEqual(abbrevName("Patrick Feenan"), "P.F");
assert.strictEqual(abbrevName("Evan Cole"), "E.C");
assert.strictEqual(abbrevName("P Favuzzi"), "P.F");
assert.strictEqual(abbrevName("David Mendieta"), "D.M");