// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// Parameters:  an array of nums and a limit value

// Return: a boolean if meets requirements

// Example:
// assert.strictEqual(smallEnough([66, 101], 200), true);
// assert.strictEqual(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
// assert.strictEqual(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
// assert.strictEqual(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);

// Psuedocode: use methods Math.max and compare

//? Learned about the spread operator syntax

const assert = require('assert')

function smallEnough(a, limit){
  
    return Math.max(...a) <= limit
     
    //  console.log(limit)
    //  console.log(element)
     
   
   
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
//     return
// }
}

console.log(smallEnough([66, 101], 200))

assert.strictEqual(smallEnough([66, 101], 200), true);
assert.strictEqual(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
assert.strictEqual(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
assert.strictEqual(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);