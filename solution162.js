// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

//? Parameters: a mixed arr of nums and str

//? Return: a sum that is a num

//? Example:
// assert.strictEqual(divCon([9, 3, '7', '3']), 2);
// assert.strictEqual(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14); 
// assert.strictEqual(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 13);

//? Psuedocode: loop through arr, filter out strings and use reduce mafs, first time running into typeof

const assert = require('assert')

function divCon(arr){

    const strBucket = arr.filter(item => typeof item === 'string')
    const numBucket = arr.filter(item => typeof item === 'number')

    const strSum = strBucket.reduce((sum, cur) => sum += +cur, 0)
    const numSum = numBucket.reduce((sum, cur) => sum += cur, 0)

    return numSum - strSum
}

console.log(divCon([9, 3, '7', '3']))

assert.strictEqual(divCon([9, 3, '7', '3']), 2);
assert.strictEqual(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14); 
assert.strictEqual(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 13);