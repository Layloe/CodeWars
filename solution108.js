// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

// Can you figure out what's wrong here?

// function swapValues() {
//     var args = Array.prototype.slice.call(arguments);
//     var temp = args[0];
//     args[0] = args[1];
//     args[1] = temp;
// }
const assert = require('assert') 

function swapValues(arr) {
    return arr.reverse()
       
    }

    console.log(swapValues([0], 2))

    Test.assertEquals(arr[0], 2, "Failed swapping numbers")
    Test.assertEquals(arr[1], 1, "Failed swapping numbers")