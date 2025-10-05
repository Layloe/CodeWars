// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// Inputs: "abc", "bc"
// Output: true

// Inputs: "abc", "d"
// Output: false
const assert = require('assert')

const solution = (str, ending) => str.endsWith(ending)

// function solution(str, ending){
//   if (ending === '') {
//     return true
//   }
  
//   return str.split('').slice( - ending.length).join('') === ending
// }
console.log(solution('abcde', 'cde'))
// Input had two params and both are strings.
// Output is a boolean that returns true if first param ends with second param.
    assert.strictEqual('abcde', 'cde', true);
    assert.strictEqual('abcde', 'abc', false);
    assert.strictEqual('empty ending', '', true);
    assert.strictEqual('', 'empty string', false);
    assert.strictEqual('', '', true);
// Split and slice second param length then join and compare, if else for empty string.