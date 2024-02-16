// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

//? Parameters: a non-negitive interger

//? Return: a string that repeats the  "1 sheep...""

//? Example:
// assert.strictEqual(countSheep(0), "");
// assert.strictEqual(countSheep(1), "1 sheep...");
// assert.strictEqual(countSheep(2), "1 sheep...2 sheep...");
// assert.strictEqual(countSheep(3), "1 sheep...2 sheep...3 sheep...");

//? Psuedocode: over engineered answer call this one a wash

const assert = require('assert')


var countSheep = function (num){
    let str = ''
    for(let i = 1; i <= num; i++){
      str += `${i} sheep...`
    }
    return str

}
console.log(countSheep(2))

  assert.strictEqual(countSheep(0), "");
  assert.strictEqual(countSheep(1), "1 sheep...");
  assert.strictEqual(countSheep(2), "1 sheep...2 sheep...");
  assert.strictEqual(countSheep(3), "1 sheep...2 sheep...3 sheep...");