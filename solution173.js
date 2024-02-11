
// Write a function that removes the spaces from the string, then return the resultant string.

// Examples:

// Input -> Output
// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"

//? Parameters: takes in a string with random spaces

//? Return: that string without the random spaces

//? Example:
// assert.strictEqual(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
// assert.strictEqual(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd'); 
// assert.strictEqual(noSpace('8aaaaa dddd r     '), '8aaaaaddddr'); 

//? Psuedocode: use methods split(' ') with a space as the dilimiter then then join('') to transform the arr back to a string.

const assert = require('assert')

// const noSpace = x => x.split(' ').join('') //? Practicing arrow functions as I review and add to anki deck

function noSpace(x){
    return x.split(' ').join('')
}
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))

assert.strictEqual(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
assert.strictEqual(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd'); 
assert.strictEqual(noSpace('8aaaaa dddd r     '), '8aaaaaddddr'); 