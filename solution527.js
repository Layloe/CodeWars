// This is a follow up to my kata the old switcheroo.

// Write a function that takes in a string and replaces all the letters with their respective positions in the English alphabet; e.g. 'a' is 1, 'z' is 26. The function should be case-insensitive.

// 'abc'      --> '123'
// 'ABC'      --> '123'
// 'codewars' --> '315452311819'
// 'abc-#@5'  --> '123-#@5'

function encode(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const getIndex = str.toLowerCase().split('').map(item => {
        if (alphabet.includes(item)) {
            return alphabet.indexOf(item) + 1
        } else {
            return item
        }
    })
  return getIndex.join('')
}
console.log(encode("ZzzzZ"))
// Input is going to be a string mixed letters and chars.
// Output is a string of the alphabet index location else if not letter return char.
//    [
//     ["abc", "123"],
//     ["ABCD", "1234"],
//     ["ZzzzZ", "2626262626"],
//     ["abc-#@5", "123-#@5"],
//    [
// Find string of lowercase alphabet then split, to lowercase, then map and use if else to search if item is included in alphabet else item.