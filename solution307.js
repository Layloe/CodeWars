// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// Example:

// solution(5) // should return "Value is 00005"

//? Parameters: a number no longer then 5 digits 

//? Return: a sting "Value is *****"

//? Example:
// assert.strictEqual(solution(5),"Value is 00005")
// assert.strictEqual(solution(1204),"Value is 01204")
// assert.strictEqual(solution(109),"Value is 00109")
// assert.strictEqual(solution(0),"Value is 00000")

//? Pseudocode: var 
// padStart(0, 5) //?added to anki

const assert = require('assert')

function solution(value){
    // const numToString = 
    
    return "Value is " + value.toString().padStart(5, "0")
  }
  console.log(solution(1204))

  assert.strictEqual(solution(5),"Value is 00005")
  assert.strictEqual(solution(1204),"Value is 01204")
  assert.strictEqual(solution(109),"Value is 00109")
  assert.strictEqual(solution(0),"Value is 00000") 