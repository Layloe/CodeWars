// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//? Parameters:a string

//? Return: the number of vowels in the string == "a", "e", "i", "o", "u"

//? Example:
// assert.strictEqual(getCount("abracadabra"), 5)

const assert = require('assert')

//? Pseudocode: create var
//? split('')
//? filter() vowels
//? length

function getCount(str) {
    const vow = str.split('').filter(item => 'aeiou'.includes(item) ).length
    return vow 
  }
console.log(getCount("abracadabra")) 

  assert.strictEqual(getCount("abracadabra"), 5)