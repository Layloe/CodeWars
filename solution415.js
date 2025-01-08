// Write a function that takes an integer num (num >= 0) and inserts dashes ('-') between each two odd digits in num.
const assert = require('assert')
// Examples
// 454793 ---> "4547-9-3"
//      0 ---> "0"
//      1 ---> "1"
// 13579  ---> "1-3-5-7-9"
//  86420 ---> "86420"
function insertDash(num) {
    const toStr = String(num).split('') 
    let dashArr = []
    for (const curr of toStr) {
        if (curr % 2 == 0 && [curr + 1] % 2 == 0) {
           return dashArr += dashArr[curr] + '-'
        }
    }
    // const splitArr = String(num).split('').map((item, index, arr )=> {
    //     if (item + 1 % 2 !== 0 && item % 2 !== 0 && item - 1 % 2 !== 0) {
    //         return item + '-' 
            
    //     } else {
    //         return item 
    //     }
    // })
    // return splitArr
 }
console.log(insertDash(4547939)) 
//input is going to be a number
//output will be a num that will have dashes ('-') between each two odd digits in num.
    // assert.strictEqual(insertDash(454793),'4547-9-3');
    // assert.strictEqual(insertDash(123456),'123456');
    // assert.strictEqual(insertDash(1003567),'1003-567');
//first let' split the num use conditionals with % to see if a number is even or not
