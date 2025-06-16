// Check if it is a vowel(a, e, i, o, u,) on the n position in a string (the first argument). Don't forget about uppercase.

// A few cases:

// {
// checkVowel('cat', 1)  ->   true // 'a' is a vowel
// checkVowel('cat', 0)  ->   false // 'c' is not a vowel
// checkVowel('cat', 4)  ->   false // this position doesn't exist
// }
const assert = require('assert')
function checkVowel(string, position) {
  const vowels = 'AEIOUaeiou'.includes(string[position])
//   const isVowel = string.map((item, index, arr)=> {
    // console.log(vowels.includes(item))
    // console.log(arr[position] )
    // if (vowels.includes(item[position])) {
    //     return true
    // } else {
    //     return false
    // }
//   })
return vowels
}
console.log(checkVowel('cat', 1))
// Input has two parameters, one is a string the other a number.
// Output is a boolean.
    assert.strictEqual(checkVowel('cat', 1), true);
    assert.strictEqual(checkVowel('cat', 0), false);
    assert.strictEqual(checkVowel('cat', 4), false);

    assert.strictEqual(checkVowel('Amanda', -2), false);
    assert.strictEqual(checkVowel('Amanda', 0), true);
    assert.strictEqual(checkVowel('Amanda', 2), true);  
// Declare a variable that will hold vowels string then split map and use if else to return boolean.