// vowelOne
// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

// Examples:

// vowelOne( "abceios" ) // "1001110"

// vowelOne( "aeiou, abc" ) // "1111100100"

//? Parameters:  a string of random chars, including non alpha characters (spaces,commas etc.)

//? Return:  a string of 1's in place of vowels and 0's of anything else

//? Example:
// assert.strictEqual( vowelOne( "vowelOne" ), "01010101" );
// assert.strictEqual( vowelOne( "123, arou" ), "000001011" );

//? Pseudocode: var split
//map
//conditionals
//includes
//join

const assert = require('assert')

function vowelOne(s){
    const oneAndZeros = s.split('').map((item, index) => "aeiouAEIUO".includes(item) ? '1' : '0').join('')
    return oneAndZeros
  }
console.log(vowelOne("vowelOne"))

  assert.strictEqual( vowelOne( "vowelOne" ), "01010101" );
  assert.strictEqual( vowelOne( "123, arou" ), "000001011" );  