// Fix My Phone Numbers
// Oh thank goodness you're here! The last intern has completely ruined everything!

// All of our customer's phone numbers have been scrambled, and we need those phone numbers to annoy them with endless sales calls!

// The Format
// Phone numbers are stored as strings and comprise 11 digits, eg '02078834982' and must always start with a 0.

// However, something strange has happened and now all of the phone numbers contain lots of random characters, whitespace and some are not phone numbers at all!

// For example, '02078834982' has somehow become 'efRFS:)0207ERGQREG88349F82!' and there are lots more lines that we need to check.

// The Task
// Given a string, you must decide whether or not it contains a valid phone number. If it does, return the corrected phone number as a string ie. '02078834982' with no whitespace or special characters, else return "Not a phone number".
const assert = require('assert')

function isItANum(str) {
    const parseNums = str.split('').filter(item => item == '0' ? item : parseInt(item)).join('')
     
    return parseNums.length === 11 && parseNums[0] === '0' ? parseNums : "Not a phone number"
}
console.log(isItANum("S:)0207ERGQREG88349F82!efRF)"))
// Input is a string or random chars.
// Output is a string of numbers that start with'0' and have the length of 11 else "Not a phone number"
// assert.assertEquals(isItANum("S:)0207ERGQREG88349F82!efRF)"), "02078834982");
// assert.assertEquals(isItANum("sjfniebienvr12312312312ehfWh"), "Not a phone number");
// assert.assertEquals(isItANum("0192387415456"), "Not a phone number");
// assert.assertEquals(isItANum("v   uf  f 0tt2eg qe0b 8rtyq4eyq564()(((((165"), "02084564165");
// assert.assertEquals(isItANum("stop calling me no I have never been in an accident"), "Not a phone number")
// Split filter and parse Number use if else to check if it starts with a '0' ans length is 11 else default string.