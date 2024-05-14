// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

//? Parameters: a string of lowercase letters

//? Return: two strings each with with capitalized letters depending on index

//? Example:
// assert.strictEqual(capitalize("abcdef"),['AbCdEf', 'aBcDeF']);
// Test.assertDeepEquals(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS']);
// Test.assertDeepEquals(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa']);
// Test.assertDeepEquals(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS']);

//? Pseudocode: declare 2 vars; one for even other for odd
//? split()
//? map().toUpperCase()
//? if else index and modulus %2 == 0
//? join()

const assert = require('assert') //ran out of time but it's there

function capitalize(s){      
    const evenUpperCase = s.split('').map((item,index) => index % 2 == 0  ? item.toUpperCase() : item.toLowerCase()).join('')
    const oddUpperCase =  s.split('').map((item,index) => index % 2 !== 0 ? item.toUpperCase() : item.toLowerCase()).join('')
    return  [evenUpperCase, oddUpperCase]
    
    
  }
console.log(capitalize("codewars"))

assert.strictEqual(capitalize("abcdef"),['AbCdEf', 'aBcDeF']);
assert.strictEqual(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS']);
assert.strictEqual(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa']);
assert.strictEqual(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS']);