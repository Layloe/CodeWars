// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.
const assert = require('assert')

function moveTen(s){
    // const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    // const findLetter = s.split('').map(item => item.includes())
    // return findLetter
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let move10 = 'klmnopqrstuvwxyzabcdefghij';
    return s.replace(/[a-z]/g, x => move10[alphabet.indexOf(x)]);
}
console.log(moveTen("testcase"))

// input will be a string of random letters in the alphabet
// output will be the input string with the their indexes moved 10 places in the alphabet.
assert.strictEqual(moveTen("testcase"), "docdmkco");
assert.strictEqual(moveTen("codewars"), "mynogkbc");
assert.strictEqual(moveTen("exampletesthere"), "ohkwzvodocdrobo");
// declare a variable and assign lowercase alphabet then add split and map. Use the index to add 10. Then use conditionals once it goes past 'z', to start again at 'a'.