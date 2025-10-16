// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// Example:

// solution(5); // should return "Value is 00005"

const assert = require('assert')

function solution(value){

   return 'Value is ' + String(value).padStart(5, '0')
}
console.log(solution(109))
// Input is a string of a numbers.
// Output is a string of numbers with the length = 5 padded with 0's
    assert.strictEqual(solution(5),"Value is 00005")
    assert.strictEqual(solution(1204),"Value is 01204")
    assert.strictEqual(solution(109),"Value is 00109")
    assert.strictEqual(solution(0),"Value is 00000")
// Create a variable that will do take in the math of the length of the param.
// Then use that var to pad the argument.