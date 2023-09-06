// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

// Can you figure out what's wrong here?


//Parameters: array with two elements

//Return: an array with swapt index locations

//Example:
// Test.assertEquals(arr[0], 2, "Failed swapping numbers")
// Test.assertEquals(arr[1], 1, "Failed swapping numbers")

//Psuedocode: Possibly use the method sort or use the index position in the arr then reverse
const assert = require('assert')

function swapValues(arr) {

       
        // var arr = Array.prototype.slice.call(arguments);
        // var temp = args[0];
        // args[0] = args[1];
        // args[1] = temp;
        //   return arr.reverse()
        return arr.reverse()
    }

console.log(swapValues([0,1]))    

assert.deepEquals(arr[0], 2, "Failed swapping numbers")
assert.deepEquals(arr[1], 1, "Failed swapping numbers")