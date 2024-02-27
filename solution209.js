// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"

//? Prameters: two params a string and a letter or symbol

//? Return: text == "" return "" else return text string.length replace by char

//? Example:
// Test.assertEquals(contamination("abc","z"), "zzz")
// Test.assertEquals(contamination("","z"), "")
// Test.assertEquals(contamination("abc",""), "")
// Test.assertEquals(contamination("_3ebzgh4","&"), "&&&&&&&&")
// Test.assertEquals(contamination("//case"," "), "      ")

//? Psuedocode: condtionals if empty str or char
//? char.repeat(length)

const assert = require('assert')


// const contamination = (text, char) => text == "" || char == "" ? "" : char.repeat(text.length)

function contamination(text, char){
    const txtLength = text.length
    if (text == "" || char == "") {
        return ""
    }
   return  char.repeat(txtLength)
  }
console.log(contamination("_3ebzgh4","&"))

assert.strictEqual(contamination("abc","z"), "zzz")
assert.strictEqual(contamination("","z"), "")
assert.strictEqual(contamination("abc",""), "")
assert.strictEqual(contamination("_3ebzgh4","&"), "&&&&&&&&")
assert.strictEqual(contamination("//case"," "), "      ")