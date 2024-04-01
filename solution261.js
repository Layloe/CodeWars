// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

// Can you figure out what's wrong here?

//? Prameters: an arr with two items

//? Return: a reversed arr

//? Example:
// Test.assertEquals(arr[0], 2, "Failed swapping numbers")
// Test.assertEquals(arr[1], 1, "Failed swapping numbers")

//? Psuedocode: reverse()

const assert = require('assert')

function swapValues(arr) {
    // var args = Array.prototype.slice.call(arguments);
    // var temp = args[0];
    // args[0] = args[1];
    // args[1] = temp;
    return arr.reverse()
}
console.log(swapValues([1,2]))

assert.assertEquals(arr[0], 2, "Failed swapping numbers")
assert.assertEquals(arr[1], 1, "Failed swapping numbers")