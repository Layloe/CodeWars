// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

const stringToArray = str => str.split(' ')
// function stringToArray(string){
//     return string.split(' ')
// }
console.log(stringToArray("I love arrays they are my favorite"))
//input is a string of words
//output is going to be a spit arr of the original string
// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
//use method split with the delimiter of white space


// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string
const assert = require('assert')
function fakeBin(x){
    return x.split('').map(item => item <= '4' ? '0' : '1').join('')
}
console.log(fakeBin('45385593107843568'))
//input is going to be a string of random numbers and is never going to be empty
//output will be a str of '0's and '1's
// ('45385593107843568'), '01011110001100111')
//use method replaceAll with conditionals, split -> map -> conditionals -> join
assert.strictEqual(fakeBin('45385593107843568'), '01011110001100111');
assert.strictEqual(fakeBin('509321967506747'), '101000111101101'); 
assert.strictEqual(fakeBin('366058562030849490134388085'), '011011110000101010000011011');
