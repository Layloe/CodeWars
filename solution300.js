// Given a string s, your task is to return another string such that even-indexed and odd-indexed characters of s are grouped and the groups are space-separated. Even-indexed group comes as first, followed by a space, and then by the odd-indexed part.

// Examples
// input:    "CodeWars" => "CdWr oeas"
//            ||||||||      |||| ||||
// indices:   01234567      0246 1357
// Even indices 0, 2, 4, 6, so we have "CdWr" as the first group.
// Odd indices are 1, 3, 5, 7, so the second group is "oeas".
// And the final string to return is "Cdwr oeas".

// Notes
// Tested strings are at least 8 characters long.

//? Parameters: a string

//? Return: a single string bur with odd index chars on one side and odd on the other.

//? Example:
// assert.strictEqual(sortMyString("CodeWars"), "CdWr oeas");
// assert.strictEqual(sortMyString("YCOLUE'VREER"), "YOU'RE CLEVER");

//? Pseudocode: var split()
// map
// index % 2 === 0
// push
// template literals 

const assert = require('assert')

function sortMyString(S) { 
    const arrLeft = []
    const arrRight = []
    const splitStr = S.split('').map((item, index) => index % 2 == 0 ? arrLeft.push(item) : arrRight.push(item)  )
    return `${arrLeft.join('')} ${arrRight.join('')}`
}
console.log(sortMyString("YCOLUE'VREER"))

assert.strictEqual(sortMyString("CodeWars"), "CdWr oeas");
assert.strictEqual(sortMyString("YCOLUE'VREER"), "YOU'RE CLEVER");

//         ( •_• )
// 　　＿ノ ヽ ノ＼ __
// 　 /　`/ ⌒Ｙ⌒
// 　|　ﾉ⌒＼ ￣￣ヽ　 ノ
// 　ヽ＿＿＿＞､＿＿_／
// 　　　 ｜( 王 ﾉ〈
// 　　　 /ﾐ`ー―彡\