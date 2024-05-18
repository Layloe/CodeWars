// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

//? Parameters: two params both strings of letters

//? Return: a boolean if first param ends with second param

//? Example:
// Test.assertEquals(solution('abcde', 'cde'), true)
// Test.assertEquals(solution('abcde', 'abc'), false)

//? Pseudocode: var split() map check if index matches item ? boolean 
//? conditionals 
//? includes()
//? lastIndexOf()

const assert = require('assert')

// const solution = (str, ending) => str.endsWith(ending)

function solution(str, ending){

    return str.endsWith(ending) 
  }
console.log(solution('abcde', 'abc'))

assert.strictEqual(solution('abcde', 'cde'), true)
assert.strictEqual(solution('abcde', 'abc'), false)