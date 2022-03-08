// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

//? Prameters: an array of postive and negtive nums

//? Return:  the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

//? Example:
// assert.deepEqual(norm(invert([1,2,3,4,5])), [-1,-2,-3,-4,-5]);
// assert.deepEqual(norm(invert([1,-2,3,-4,5])), [-1,2,-3,4,-5]);
// assert.deepEqual(norm(invert([])), []);
// assert.deepEqual(norm(invert([0])), [0]);

//? Psuedocode: map
//? condtionals and mafs
//? Math.abs(item) & -Math.abs(item)

const assert = require('assert')

// const invert = array => array.map(item => item >= 0 ? -Math.abs(item) : Math.abs(item))

function invert(array) {
    const cantThinkRightNow = array.map(item => item >= 0 ? -Math.abs(item) : Math.abs(item)
         
    )
    return cantThinkRightNow
 }
console.log(invert([1,-2,3,-4,5]))                                     //!test cases not behaving
 assert.deepStrictEqual(invert([1,2,3,4,5]), [-1,-2,-3,-4,-5]);
 assert.deepStrictEqual(invert([1,-2,3,-4,5]), [-1,2,-3,4,-5]);
 assert.deepStrictEqual(invert([])), [];
 assert.ddeepStrictEqual(invert([0])), [0];
//         ( •_• )
// 　　＿ノ ヽ ノ＼ __
// 　 /　`/ ⌒Ｙ⌒
// 　|　ﾉ⌒＼ ￣￣ヽ　 ノ
// 　ヽ＿＿＿＞､＿＿_／
// 　　　 ｜( 王 ﾉ〈
// 　　　 /ﾐ`ー―彡\