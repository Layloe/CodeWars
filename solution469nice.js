// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// Example:

// solution(5); // should return "Value is 00005"
const assert = require('assert')
// const solution = value => `Value is ${String(value).padStart(5, '0')}`
function solution(value){
    
    return `Value is ${String(value).padStart(5, '0')}`
  }
  console.log(solution(42))
  // Input will be a non negative number
  // Output will be a string that will sill contain the number and the length of five it will be padded by zeros. 00000 + number = 00042
    assert.strictEqual(solution(5),"Value is 00005")
    assert.strictEqual(solution(1204),"Value is 01204")
    assert.strictEqual(solution(109),"Value is 00109")
    assert.strictEqual(solution(0),"Value is 00000")
// Get the number length and minus that length from five then use the results in the method padStart, then return the string in template literals.  