// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.


//? Parameters: a num

//? Return: a -num

//? Example:see above

//? Pseudocode: var math.abs()
//conditionals
//make tests

const assert = require('assert')

function makeNegative(num) {
    const numConvertToNeg = Math.abs(num)
    if (numConvertToNeg == 0) {
        return 0
    }
    if (numConvertToNeg > 0) {
        return -numConvertToNeg
    } else {
        return num
    }
  }
console.log(makeNegative(0))

assert.strictEqual(makeNegative(1), -1)
assert.strictEqual(makeNegative(0), 0)
assert.strictEqual(makeNegative(4.25), -4.25)
assert.strictEqual(makeNegative(3.3333333), -3.3333333)
// makeNegative(1);    // return -1  
//         ( •_• )
// 　　＿ノ ヽ ノ＼ __
// 　 /　`/ ⌒Ｙ⌒
// 　|　ﾉ⌒＼ ￣￣ヽ　 ノ
// 　ヽ＿＿＿＞､＿＿_／
// 　　　 ｜( 王 ﾉ〈
// 　　　 /ﾐ`ー―彡\