// Bob is a lazy man.

// He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.

// Example:

// "hel2!lo" --> 6

// "wicked .. !" --> 6

// "!?..A" --> 1
const assert = require('assert')

function countLettersAndDigits(input) {

    return input.split('').filter(item => !"!@#$%^&*()_+-=[]{}|;:'\",.<>/?`~".includes(item)).length
  }
console.log(countLettersAndDigits("n!!_ice!!123"))
// Input is a string of random characters.
// Output is a number length of the string that doesn't contain non alphanumeric chars
// assert.equal(countLettersAndDigits("hel2!lo"), 6);
// assert.equal(countLettersAndDigits("n!!_ice!!123"), 7);
// assert.equal(countLettersAndDigits("1"), 1);
// assert.equal(countLettersAndDigits("?"), 0);
// assert.equal(countLettersAndDigits("12345f%%%t5t&/6"), 10);
// assert.equal(countLettersAndDigits("aBcDeFg090"), 10);
// assert.equal(countLettersAndDigits("u_n_d_e_r__S_C_O_R_E"), 10);
// First thing find all non alphanumeric chars then split and filter then length.