// Unfinished Loop - Bug Fixing #1
// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!
//? Parameters: counter function 

//? Return: working counter

//? Example:
// assert.deepEqual(createArray(3),[1,2,3])

//? Pseudocode: review code and debug 

const assert = require('assert')

function createArray(number){
    var newArray = [];
    
    for(let i = 1; i <= number; ++i){
      newArray.push(i);
    }
    
    return newArray;
  }
console.log(createArray(3))

assert.deepEqual(createArray(1),[1]);
assert.deepEqual(createArray(2),[1,2]);
assert.deepEqual(createArray(3),[1,2,3])