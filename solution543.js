// In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, or if the letter occurs only once in the string, -1 should be returned.

// Examples:

// for inputs  "Hello world!!!", 'l'  ->  return 3
// for inputs  "Hello world!!!", 'A'  ->  return -1
// Good luck ;) And don't forget to rate this kata if you liked it.
const assert = require('assert')

function secondSymbol(s, symbol) {
    const results = []
       if (!s.includes(symbol)) {
            return -1
       }        
    const findChar = s.split('').map((item, index, arr) => {
        if (item == symbol) {
            results.push(index)
        }
    })    

  return results[1]
}
console.log(secondSymbol('Hello world!!!','o'))
// Input has two parameters both strings.
// Output is a number.
    assert.strictEqual(secondSymbol('Hello world!!!','l'), 3, 'Find the index of the second symbol "l" in the string');
    assert.strictEqual(secondSymbol('Hello world!!!', 'o'), 7, 'Find the index of the second symbol "o" in the string');
    assert.strictEqual(secondSymbol('Hello world!!!', 'A'), -1, 'The symbol "A" is not in the string');
    assert.strictEqual(secondSymbol('', 'q'), -1, 'The symbol "q" is not in the string');
    assert.strictEqual(secondSymbol('Hello', '!'), -1, 'The symbol "!" is not in the string');
// Declare a var that will split and map then use if else to find char/symbol. If true push index to empty arr. For edge case use if else to see if string includes symbol if false return -1.