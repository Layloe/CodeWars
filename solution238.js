// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

//? Prameters: a string of nums

//? Return: a string of one and zeros

//? Example:
// assert.strictEqual(fakeBin('45385593107843568'), '01011110001100111');
// assert.strictEqual(fakeBin('509321967506747'), '101000111101101'); 
// assert.strictEqual(fakeBin('366058562030849490134388085'), '011011110000101010000011011')

//? Psuedocode: split('')
//? map() 
//? condtionals
//? replace
//? join()

const assert = require('assert')

const fakeBin = x => x.split('').map(item => item >= 5 ? 1 : 0).join('')

// function fakeBin(x){

//     return x.split('').map(item => item >= 5 ? 1 : 0).join('')
// }
console.log(fakeBin('45385593107843568'))

assert.strictEqual(fakeBin('45385593107843568'), '01011110001100111');
assert.strictEqual(fakeBin('509321967506747'), '101000111101101'); 
assert.strictEqual(fakeBin('366058562030849490134388085'), '011011110000101010000011011')