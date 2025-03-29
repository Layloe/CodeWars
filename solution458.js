// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
const assert = require('assert')

function solution(str, ending){
  return str.endsWith(ending)
  }
  console.log(solution('samurai', 'ai'))
  // Input will have two params and will  both be strings
  // OUtput is a boolean
  assert.strictEqual(solution('abcde', 'cde'), true)
  assert.strictEqual(solution('abcde', 'abc'), false)
  // Get the ending param length then slice str param and compare