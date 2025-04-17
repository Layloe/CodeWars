// Write a function that takes an integer num (num >= 0) and inserts dashes ('-') between each two odd digits in num.

// Examples
// 454793 ---> "4547-9-3"
//      0 ---> "0"
//      1 ---> "1"
// 13579  ---> "1-3-5-7-9"
//  86420 ---> "86420"
const assert = require('assert')

function insertDash(num) {
    const twoOdd = String(num).split('').map((item, index, arr) => {
        if (item % 2 == 0 && arr[index + 1] % 2 != 0 || item % 2 != 0 && arr[index + 1] % 2 == 0 ) {
            return item 
        }
        if (item % 2 !== 0 && arr[index + 1] % 2 !== 0) {
            return item + '-'
        }
    })

    return twoOdd.join('')
 }
 console.log(insertDash(454793))
 // Input will be a non negative integer
 // OUtput will be a string with dashes in between two consecutive odd numbers
//  assert.strictEqual(insertDash(454793),'4547-9-3');
//  assert.strictEqual(insertDash(123456),'123456');
//  assert.strictEqual(insertDash(1003567),'1003-567'); 
 // split map then if else with modulus and index