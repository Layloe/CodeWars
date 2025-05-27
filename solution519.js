// Task
// You are given a string representing a number in binary. Your task is to delete all the unset bits in this string and return the corresponding number (after keeping only the '1's).

// In practice, you should implement this function:

// function eliminateUnsetBits(number);
// Examples
// eliminateUnsetBits("11010101010101") ->  255 (= 11111111)
// eliminateUnsetBits("111") ->  7
// eliminateUnsetBits("1000000") -> 1
// eliminateUnsetBits("000") -> 0

function eliminateUnsetBits(number) {
    const  onesOnly = number.split('').filter(item => item == '1').join('')

    return parseInt(onesOnly, 2)
}
console.log(eliminateUnsetBits("11010101010101"))
// Input is a string of ones and zeros.
// Output is a number.
    // assert.strictEqual(eliminateUnsetBits("11010101010101"), 255)
    // assert.strictEqual(eliminateUnsetBits("111"), 7)
    // assert.strictEqual(eliminateUnsetBits("1000000"), 1)
    // assert.strictEqual(eliminateUnsetBits("000"), 0)
// Split filter item =='1' then join. Use method parseInt with 2 as the second parameter.