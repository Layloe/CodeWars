// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

//? Prameters: an array of integers as strings and numbers

//? Return: the sum of the array values as if all were numbers

//? Example:
// assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
// assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
// assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41)

//? Psuedocode: variable
//? reduce()
//? Number()

// const sumMix = x => x.reduce((sum,curr) => sum + Number(curr), 0)

const assert = require('assert')

function sumMix(x){
    const nums = x.reduce((sum, curr) => sum + Number(curr), 0)
    
    return nums
}
console.log(sumMix([9, 3, '7', '3']))

assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41)