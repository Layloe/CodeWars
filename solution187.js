// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


//? Parameters: an array of mixed data types of numbers and integers as strings. 

//? Return: a sum of the total items in the array

//? Example:
// assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
// assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
// assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);

//? Psuedocode:
//  declare a variable that will -->
//  turn strings to nums by using the Number() method/constructor
//  use method reduce to get the sum
//? else trying to use the Number() method inside reduce, ha it worked!

const assert = require('assert')

// const sumMix = x => x.reduce((sum, curr) => sum + Number(curr), 0)

function sumMix(x){
    // const str2nums = x
    return x.reduce((sum, curr) => sum + Number(curr), 0)
}
console.log(sumMix([9, 3, '7', '3']))

assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);