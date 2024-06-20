// Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

// If the tail is right return true, else return false.

// The arguments will always be non empty strings, and normal letters.

//? Parameters: two params one a str other a letter

//? Return: a boolean 

//? Example:
// assert.strictEqual(correctTail("Fox", "x"), true);
// assert.strictEqual(correctTail("Rhino", "o"), true);
// assert.strictEqual(correctTail("Meerkat", "t"), true);

//? Pseudocode: debug
// fix function structure
// endsWith

const assert = require('assert')

// const correctTail = (body, tail) => body.endsWith(tail)

function correctTail(body, tail) {
    const lastIndex = body.endsWith(tail)

    return lastIndex
}    
console.log(correctTail("Fox", "x"))

assert.strictEqual(correctTail("Fox", "x"), true);
assert.strictEqual(correctTail("Rhino", "o"), true);
assert.strictEqual(correctTail("Meerkat", "z"), false);
//         ( •_• )
// 　　＿ノ ヽ ノ＼ __
// 　 /　`/ ⌒Ｙ⌒
// 　|　ﾉ⌒＼ ￣￣ヽ　 ノ
// 　ヽ＿＿＿＞､＿＿_／
// 　　　 ｜( 王 ﾉ〈
// 　　　 /ﾐ`ー―彡\