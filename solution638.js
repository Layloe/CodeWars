// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array. Note that the array size is at least 2 and consists a mixture of positive, negative integers and also zeroes.

// Examples
// [1, 2, 3] returns 6 because the maximum product is obtained from multiplying 
 
// 2
// ∗
// 3
// =
// 6
//  2∗3=6
// [9, 5, 10, 2, 24, -1, -48] returns 50 because the maximum product is obtained from multiplying 
 
// 5
// ∗
// 10
// =
// 50
//  5∗10=50
// [-23, 4, -5, 99, -27, 329, -2, 7, -921] returns -14 because the maximum product is obtained from multiplying 
 
// −
// 2
// ∗
// 7
// =
// −
// 14
//  −2∗7=−14

const assert = require('assert')


function adjacentElementsProduct(arr) {
    let results = []
    for (let i = 0; i < arr.length -1; i++) {
        results.push(arr[i] * arr[i + 1])
    }
    

    return Math.max(...results)
}
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]))

// Input is an array of positive and negative numbers.
// Output is a sum/number.
    assert.strictEqual(adjacentElementsProduct([3, 6, -2, -5, 7, 3]), 21);
    assert.strictEqual(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]), 50);
    assert.strictEqual(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23]), 30);
    assert.strictEqual(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]), -14);
    assert.strictEqual(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);
// Declare empty array variable. Use a for loop to push the sum of item multiplied by index + 1. Use method Math.max to get the greatest number.