
// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. it must make the first character in the string upper case).

// The string will always start with a letter and will never be empty.

// Examples:

// "hello" --> "Hello"
// "Hello" --> "Hello" (the first letter was already capitalized)
// "a"     --> "A"

//? Parameters: a string

//? Return: a capitalized string

//? Example:
// Test.assertSimilar(capitalizeWord('word'), 'Word');

//? Pseudocode: create var
// +
// toLowerCase()
//slice(1)

const assert = require('assert')

// const capitalizeWord = word => word[0].toUpperCase() + word.toLowerCase().slice(1)

function capitalizeWord(word) {
   const capitalize = word[0].toUpperCase() + word.toLowerCase().slice(1)
    return capitalize;
  }
  console.log(capitalizeWord('Word'))

assert.strictEqual(capitalizeWord('word'), 'Word');
assert.strictEqual(capitalizeWord('i'), 'I');
assert.strictEqual(capitalizeWord('glasswear'), 'Glasswear');