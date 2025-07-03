// Happy Holidays fellow Code Warriors!
// Santa's senior gift organizer Elf developed a way to represent up to 26 gifts by assigning a unique alphabetical character to each gift. After each gift was assigned a character, the gift organizer Elf then joined the characters to form the gift ordering code.

// Santa asked his organizer to order the characters in alphabetical order, but the Elf fell asleep from consuming too much hot chocolate and candy canes! Can you help him out?

// Sort the Gift Code
// Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.

// Examples (Input -- => Output):
// "abcdef"                      -- => "abcdef"
// "pqksuvy"                     -- => "kpqsuvy"
// "zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"
const assert = require('assert')

function sortGiftCode(code){
  const sortOf = code.split("").sort()
  return sortOf.join('')
}
console.log(sortGiftCode('pqksuvy'))
// Input is a string of letters.
// Output is a sorted string.
    assert.strictEqual(sortGiftCode('abcdef'), 'abcdef', "sortGiftCode('abcdef')")
    assert.strictEqual(sortGiftCode('pqksuvy'), 'kpqsuvy', "sortGiftCode('pqksuvy')")
    assert.strictEqual(sortGiftCode('zyxwvutsrqponmlkjihgfedcba'), 'abcdefghijklmnopqrstuvwxyz', "sortGiftCode('zyxwvutsrqponmlkjihgfedcba')")
// Create a var and split and sort then join.