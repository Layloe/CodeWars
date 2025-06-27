// Create a function that takes a string and returns that string with the first half lowercased and the last half uppercased.

// eg: foobar == fooBAR

// If it is an odd number then 'round' it up to find which letters to uppercase. See example below.

// sillycase("brian")  
//         --^-- midpoint  
//         bri    first half (lower-cased)  
//            AN second half (upper-cased) 
const assert = require('assert') 
function sillycase(silly) {
    const len = Math.round((silly.length / 2))

  return silly.slice(0, len).toLowerCase() + silly.slice(len).toUpperCase()
}
console.log(sillycase('brian'))
// Input is a string.
// Output is a string with the first half lowercased and the last half uppercased.
    assert.strictEqual(sillycase('foobar'), "fooBAR");
    assert.strictEqual(sillycase('codewars'), "codeWARS");
    assert.strictEqual(sillycase('brian'), 'briAN');
// Split then map then use if else to use length and divide to nsee if its even. If it use slice to to uppercase. 