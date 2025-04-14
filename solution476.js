// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// Good luck!

// If you like substring Katas, please try:

// Non-even substrings

// Vowel-consonant lexicon
const assert = require('assert')

function solve(s){
    let count = 0
    let max = 0
    for (let i = 0; i < s.length; i++) {
        if ('aeiou'.includes(s[i])) {
            count++
        if (count > max) {
            max = count
        }
        } else {
            count = 0
        }
    }
    return max
}
   console.log(solve("codewarriors"))

// Input will be a string of letters with no spaces 
// Output is going to be a number 
assert.strictEqual(solve("codewarriors"),2);
assert.strictEqual(solve("suoidea"),3);
assert.strictEqual(solve("ultrarevolutionariees"),3);
assert.strictEqual(solve("strengthlessnesses"),1);
assert.strictEqual(solve("cuboideonavicuare"),2);
assert.strictEqual(solve("chrononhotonthuooaos"),5);
assert.strictEqual(solve("iiihoovaeaaaoougjyaw"),8);
// Create variable that will hold vowel string then split  filter all vowels that are next to each other using conditionals and index location then length
//  