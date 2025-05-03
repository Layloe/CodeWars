// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.
const assert = require('assert')

 function moveTen(s) {
    const lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const findLetters = s.split('').map((item, index) => {
        // console.log(lowercaseAlphabet[(lowercaseAlphabet.indexOf(item) + 10)])
        // console.log(lowercaseAlphabet[index])
    //   return   lowercaseAlphabet.indexOf(item) + 10 > lowercaseAlphabet.length ? item[index - 16] : item
    //   .indexOf(item) + 10 > 26 ? item : null
        if (lowercaseAlphabet.indexOf(item) + 10 > lowercaseAlphabet.length) {
            return lowercaseAlphabet[(lowercaseAlphabet.indexOf(item) - 16)]
        } 
        else {
            return lowercaseAlphabet[(lowercaseAlphabet.indexOf(item) + 10)]
        }
        // String.fromCharCode(
        //     item.charCodeAt() + 10 > 122 ? item.charCodeAt() - 16 : item.charCodeAt() + 10
        // )
    //     console.log(lowercaseAlphabet[index % lowercaseAlphabet.length])
    // //    return lowercaseAlphabet[index % lowercaseAlphabet.length]
    //     if (lowercaseAlphabet.includes(item)) {
    //         return lowercaseAlphabet.indexOf(item)
    //     }
        
    //    return lowercaseAlphabet[index]
    })
    return findLetters.join('')
 }
 console.log(moveTen("testcase")) 
 // Input is a string with length > 0.
 // Output is a string with index moved 10 places
    assert.strictEqual(moveTen("testcase"), "docdmkco");
    assert.strictEqual(moveTen("codewars"), "mynogkbc");
    assert.strictEqual(moveTen("exampletesthere"), "ohkwzvodocdrobo");
// Find alphabet string and create a variable to hold string then split map to array and use index to match alphabet google how to keep looping thru string one it's reached it's end. 