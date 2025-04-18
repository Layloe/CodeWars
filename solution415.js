
// Write a function that takes an integer num (num >= 0) and inserts dashes ('-') between each two odd digits in num.
const assert = require('assert')
// Examples
// 454793 ---> "4547-9-3"
//      0 ---> "0"
//      1 ---> "1"
// 13579  ---> "1-3-5-7-9"
//  86420 ---> "86420"
function insertDash(num) {
    let dashArr = []
    const toStr = String(num).split('').map((item, index, arr) => {
        dashArr.push(item)
        if (item % 2 !== 0 && arr[index + 1] % 2 !== 0) {
            dashArr.push('-')
        }
    })
    return dashArr[dashArr.length -1] == '-' ? dashArr.slice(0,-1).join('') : dashArr.join('')
 }
console.log(insertDash(4547939)) 
//input is going to be a number
//output will be a num that will have dashes ('-') between each two odd digits in num.
    assert.strictEqual(insertDash(454793),'4547-9-3');
    assert.strictEqual(insertDash(123456),'123456');
    assert.strictEqual(insertDash(1003567),'1003-567');
//first let' split the num use conditionals with % to see if a number is even or not
