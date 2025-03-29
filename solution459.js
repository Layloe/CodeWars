// This time no story, no theory. The examples below show you how to write function accum:


// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
const assert = require('assert')

function accum(s) {
	const cleanStr = s.toLowerCase().split('').map((item, index) => {
        return item[0].toUpperCase() + item.slice(0).repeat(index)
    })
    return cleanStr.join('-')
}
console.log(accum("ZpglnRxqenU"))

// Input will contain a string of random letters
// Output is going to be a string with the first letter capitalized  with each char in the string repeated an x amount of times depending on it's indexing 
        assert.strictEqual(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
        assert.strictEqual(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
        assert.strictEqual(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
        assert.strictEqual(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
        assert.strictEqual(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
// First step is to create a var that will contain parameter then going to lowercase and split to an array so I can map over it then use if else to capitalize first char using toUpperCase using the index and concat it to a sliced string repeated index location amount of times.

