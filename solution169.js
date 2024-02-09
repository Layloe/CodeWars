// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

//? Parameters: takes in a str

//? Return: a reversed str

//? Example:
// assert.strictEqual(solution('world'), 'dlrow');
// assert.strictEqual(solution('hello'), 'olleh');
// assert.strictEqual(solution(''), '');
// assert.strictEqual(solution('h'), 'h');

//? Psuedocode: first split() the string that converts it to an array, then use reverse() method and finally join() the arr to convert it back to a string

const assert = require('assert')

function solution(str){
  return str.split('').reverse().join('')
}
console.log(solution('world'))

assert.strictEqual(solution('world'), 'dlrow');
assert.strictEqual(solution('hello'), 'olleh');
assert.strictEqual(solution(''), '');
assert.strictEqual(solution('h'), 'h');