// Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.

// Vowels are (in this kata): a, e, i, o, u

// Note: all provided input strings are lowercase.

// Examples
// "day"    ==>  "dya"
// "apple"  ==>  "pplae"

const assert = require('assert')

function moveVowel(input) {
    const getVowels = input.split('').filter(item => 'aeiou'.includes(item)).join('')
    const getCons = input.split('').filter(item => !'aeiou'.includes(item)).join('')

    return getCons + getVowels
}
console.log(moveVowel('day'))

// Input is a string.
// Output is a string with all vowels move to the end of the string.
    assert.strictEqual(moveVowel("day"),"dya");
    assert.strictEqual(moveVowel("apple"),"pplae");
    assert.strictEqual(moveVowel("peace"),"pceae");
    assert.strictEqual(moveVowel("maker"),"mkrae");   
// Split and map then if else if includes vowels. If true push vowel to empty array var. Or filter then concat. 