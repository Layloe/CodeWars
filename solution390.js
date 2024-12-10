// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// a can contain numbers or strings. x can be either.

// Return true if the array contains the value, false if not.
const assert = require('assert')
// const check = (a,b) => a.includes(b)
function check(a, x) {
    return a.includes(x)
  }
  console.log(check([101, 45, 75, 105, 99, 107], 107))
  //input will be two parameters with each having an array with numbers.
  //output is going to be a boolean
  //[101, 45, 75, 105, 99, 107], 107), true)
  //use method includes with x as the argument 
  assert.strictEqual(check([66, 101], 66), true);
  assert.strictEqual(check([101, 45, 75, 105, 99, 107], 107), true);
  assert.strictEqual(check(['t', 'e', 's', 't'], 'e'), true);
  assert.strictEqual(check(['what', 'a', 'great', 'kata'], 'kat'), false);


//   If you can't sleep, just count sheeps!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
var countSheep = function (num){
    let stringStorage = ''
    for (let i = 1; i <= num; i++) {
  
        stringStorage += `${[i]} sheep...`
   
    }
    // return stringStorage
    // let sheepCountStr = ''
    // for (let i = 1; i <= num; i++) {
    //     sheepCountStr += `${i} sheep...`
    // }
    // return sheepCountStr
    // return `${num++} sheep...`.repeat(num)
    // let test = ''
    // for ( let i = 1; i <= num; i++){
    //     test += `${i} sheep...`
    // }
    // return test
  }
  console.log(countSheep(3))
  //input will be a non negative number
  //output will be a string that is repeated by the number
  //3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep..."
//   Use a counter to push string with template literals
// declare a variable with an empty string. Use a for loop to add counter to string; add counter to string with template literals 
assert.strictEqual(countSheep(0), "");
assert.strictEqual(countSheep(1), "1 sheep...");
assert.strictEqual(countSheep(2), "1 sheep...2 sheep...");
assert.strictEqual(countSheep(3), "1 sheep...2 sheep...3 sheep...");
  
