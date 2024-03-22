// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6. 

//? Prameters: two params both numbers

//? Return: multibles of the first and last number

//? Example:
// assert.sameOrderedMembers(findMultiples(5, 25), [5, 10, 15, 20, 25])
// assert.sameOrderedMembers(findMultiples(1, 2), [1, 2])
// assert.sameOrderedMembers(findMultiples(5, 7), [5])
// assert.sameOrderedMembers(findMultiples(4, 27), [4, 8, 12, 16, 20, 24])
// assert.sameOrderedMembers(findMultiples(11, 54), [11, 22, 33, 44])

//? Psuedocode: declare a var = []
//? mafs
//? for()

const assert = require('assert')

function findMultiples(integer, limit) {
    const arr = []
  
    for (let i = integer; i <= limit; i += integer) {    //?added this to my anki
      arr.push(i)
    }

    return arr
  }
console.log(findMultiples(5,25))

assert.strictEqual(findMultiples(5, 25), [5, 10, 15, 20, 25])
assert.strictEqual(findMultiples(1, 2), [1, 2])
assert.strictEqual(findMultiples(5, 7), [5])
assert.strictEqual(findMultiples(4, 27), [4, 8, 12, 16, 20, 24])
assert.strictEqual(findMultiples(11, 54), [11, 22, 33, 44])

//         ( •_• )
// 　　＿ノ ヽ ノ＼ __
// 　 /　`/ ⌒Ｙ⌒
// 　|　ﾉ⌒＼ ￣￣ヽ　 ノ
// 　ヽ＿＿＿＞､＿＿_／
// 　　　 ｜( 王 ﾉ〈
// 　　　 /ﾐ`ー―彡\