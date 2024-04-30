// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

//? Parameters: a string

//? Return: a boolean if the string has no repeated chars in the string

//? Example:
// assert.strictEqual( isIsogram("Dermatoglyphics"), true );
// assert.strictEqual( isIsogram("isogram"), true );
// assert.strictEqual( isIsogram("aba"), false, "same chars may not be adjacent" );
// assert.strictEqual( isIsogram("moOse"), false, "same chars may not be same case" );
// assert.strictEqual( isIsogram("isIsogram"), false );
// assert.strictEqual( isIsogram(""), true, "an empty string is a valid isogram" );

//? Pseudocode: declare a var
//? split()
//? filter() any dups with arr.indexOf(item) == index
//? length comparison 

 
const assert = require('assert')

function isIsogram(str){
    const sameCase = str.toLowerCase()

    const doesCharRepeat = sameCase.split('')
    .filter((item, index) => sameCase.indexOf(item) == index)
    .length == sameCase.length

    return doesCharRepeat
  }
console.log(isIsogram("Dermatoglyphics"))

  assert.strictEqual( isIsogram("Dermatoglyphics"), true );
  assert.strictEqual( isIsogram("isogram"), true );
  assert.strictEqual( isIsogram("aba"), false, "same chars may not be adjacent" );
  assert.strictEqual( isIsogram("moOse"), false, "same chars may not be same case" );
  assert.strictEqual( isIsogram("isIsogram"), false );
  assert.strictEqual( isIsogram(""), true, "an empty string is a valid isogram" );