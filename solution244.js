// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

//? Prameters: two params, both arr of num

//? Return: the sum of both arrays

//? Example:
// assert.strictEqual(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
// assert.strictEqual(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
// assert.strictEqual(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
// assert.strictEqual(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);

//? Psuedocode: create a var that concats both arrays
//? reduce()

const assert = require('assert')

// const arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((sum,curr) => sum + curr, 0)

function arrayPlusArray(arr1, arr2) {
    const conMeow = arr1.concat(arr2)
    return conMeow.reduce((sum, curr) => sum + curr, 0)
  }
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))

  assert.strictEqual(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
  assert.strictEqual(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
  assert.strictEqual(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
  assert.strictEqual(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);  
