// In this kata you will be given a random string of letters and tasked with returning them as a string of comma-separated sequences sorted alphabetically, with each sequence starting with an uppercase character followed by n-1 lowercase characters, where n is the letter's alphabet position 1-26.

// Example
// "ZpglnRxqenU" -> "Eeeee,Ggggggg,Llllllllllll,Nnnnnnnnnnnnnn,Nnnnnnnnnnnnnn,Pppppppppppppppp,Qqqqqqqqqqqqqqqqq,Rrrrrrrrrrrrrrrrrr,Uuuuuuuuuuuuuuuuuuuuu,Xxxxxxxxxxxxxxxxxxxxxxxx,Zzzzzzzzzzzzzzzzzzzzzzzzzz"
// Technical Details
// The string will include only letters.
// The first letter of each sequence is uppercase followed by n-1 lowercase.
// Each sequence is separated with a comma.
// Return value needs to be a string.
 const assert = require('assert')

function alphaSeq (str) {
 const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
 const cleanStr = str.toLowerCase().split('').sort()
 const findIndexNum = cleanStr.map((item, index) => {
    // if (item == 'a') {
    //    return item.toUpperCase() + item
    // } else {
    //     item.toUpperCase() + item.repeat(alphabet.indexOf(item))
    // }
    return item.toUpperCase() + item.repeat(alphabet.indexOf(item))
 })

    return findIndexNum.join(',')
}
console.log(alphaSeq("aZpglnRxqenU"))
// Input will be a string of random letters that will include upper and lower case
// Output will be a string that contains the letters in the given string, first letter will be uppercase followed by x amount of times based on the order of placement in the alphabet.
    assert.strictEqual(alphaSeq("ZpglnRxqenU"), "Eeeee,Ggggggg,Llllllllllll,Nnnnnnnnnnnnnn,Nnnnnnnnnnnnnn,Pppppppppppppppp,Qqqqqqqqqqqqqqqqq,Rrrrrrrrrrrrrrrrrr,Uuuuuuuuuuuuuuuuuuuuu,Xxxxxxxxxxxxxxxxxxxxxxxx,Zzzzzzzzzzzzzzzzzzzzzzzzzz");
    assert.strictEqual(alphaSeq("NyffsGeyylB"), "Bb,Eeeee,Ffffff,Ffffff,Ggggggg,Llllllllllll,Nnnnnnnnnnnnnn,Sssssssssssssssssss,Yyyyyyyyyyyyyyyyyyyyyyyyy,Yyyyyyyyyyyyyyyyyyyyyyyyy,Yyyyyyyyyyyyyyyyyyyyyyyyy");
    assert.strictEqual(alphaSeq("MjtkuBovqrU"), "Bb,Jjjjjjjjjj,Kkkkkkkkkkk,Mmmmmmmmmmmmm,Ooooooooooooooo,Qqqqqqqqqqqqqqqqq,Rrrrrrrrrrrrrrrrrr,Tttttttttttttttttttt,Uuuuuuuuuuuuuuuuuuuuu,Uuuuuuuuuuuuuuuuuuuuu,Vvvvvvvvvvvvvvvvvvvvvv");
    assert.strictEqual(alphaSeq("EvidjUnokmM"), "Dddd,Eeeee,Iiiiiiiii,Jjjjjjjjjj,Kkkkkkkkkkk,Mmmmmmmmmmmmm,Mmmmmmmmmmmmm,Nnnnnnnnnnnnnn,Ooooooooooooooo,Uuuuuuuuuuuuuuuuuuuuu,Vvvvvvvvvvvvvvvvvvvvvv");
    assert.strictEqual(alphaSeq("HbideVbxncC"), "Bb,Bb,Ccc,Ccc,Dddd,Eeeee,Hhhhhhhh,Iiiiiiiii,Nnnnnnnnnnnnnn,Vvvvvvvvvvvvvvvvvvvvvv,Xxxxxxxxxxxxxxxxxxxxxxxx");
// First is to create a var that will contain an array of strings and will include the lowercase alphabet.
//  THen create a var that will split, map and to lowercase. 
// Use index in map to locate the letters index number. Thinking through this it might need a for loop but we will see. Grab the first item then use conditionals to locate index location then first letter to uppercase with concat and using repeat with index num.