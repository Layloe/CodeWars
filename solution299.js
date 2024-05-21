// Filter the number
// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

//? Parameters: a sting with mixed up text

//? Return: all str nums and change the data type to Number

//? Example:
// assert.strictEqual(filterString("123"), 123, `For the input "123"`);
// assert.strictEqual(filterString("a1b2c3"), 123, `For the input "a1b2c3"`);
// assert.strictEqual(filterString("aa1bb2cc3dd"), 123, `For the input "aa1bb2cc3dd"`);

//? Pseudocode: var split()
// map
// Number
// conditionals edge case
// Number

const assert = require('assert')

var filterString = function(value) { // ran out of time return on str to num
    const strSplit = value.split('').filter((item, index) => Number(item) == 0 ? item : Number(item) ).join('')
    return Number(strSplit)
  }
  console.log(filterString("q6s2ng8k805e02g4a8r9q8pa4"))

  assert.strictEqual(filterString("123"), 123, `For the input "123"`);
  assert.strictEqual(filterString("a1b2c3"), 123, `For the input "a1b2c3"`);
  assert.strictEqual(filterString("aa1bb2cc3dd"), 123, `For the input "aa1bb2cc3dd"`);