// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
const assert = require('assert')

function solution(str, ending){
    const length = ending.length -1
    console.log(str.slice(ending.length -1))
    return str.slice(length ) == ending
  }
  console.log(solution('samurai', 'ai'))
  // Input will have two params and will  both be strings
  // OUtput is a boolean
//   assert.assertEquals(solution('abcde', 'cde'), true)
//   assert.assertEquals(solution('abcde', 'abc'), false)
  // Get the ending param length then slice str param and compare