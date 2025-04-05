// Nickname Generator

// Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

// If the 3rd letter is a consonant, return the first 3 letters.

// nickname("Robert") //=> "Rob"
// nickname("Kimberly") //=> "Kim"
// nickname("Samantha") //=> "Sam"
// If the 3rd letter is a vowel, return the first 4 letters.

// nickname("Jeannie") //=> "Jean"
// nickname("Douglas") //=> "Doug"
// nickname("Gregory") //=> "Greg"
// If the string is less than 4 characters, return "Error: Name too short".

// Notes:

// Vowels are "aeiou", so discount the letter "y".
// Input will always be a string.
// Input will always have the first letter capitalised and the rest lowercase (e.g. Sam).
// The input can be modified
const assert = require('assert')

function nicknameGenerator(name) {
    const vowels = 'aeiou'
    // const nameArr = name.split('').map((item, index) => {
        if (name.length <= 3) {
            return "Error: Name too short"
        }
        if (name[3] !== name.indexOf(...vowels)) {
            return name.slice(0, 3)
        } else {
            return name.slice(0, 4)
        }
        // if (item[3] == 'a' || item[3] == 'e' || item[3] == 'i' || item[3] == 'o' || item[3] == 'u') {
        //     return null
        // } else {
        //     // return item.silce(0, 3)
        // }
    // })
    console.log(...vowels)
    return nameArr.join('')
}
console.log(nicknameGenerator("Samantha"))
// Input will be a string of a name with first letter capitalized
// Output is a string that will be the length of 3 or 4 
assert.strictEqual(nicknameGenerator("Jimmy"), "Jim");
assert.strictEqual(nicknameGenerator("Samantha"), "Sam");
assert.strictEqual(nicknameGenerator("Sam"), "Error: Name too short");
assert.strictEqual(nicknameGenerator("Kayne"), "Kay", "'y' is not a vowel");
assert.strictEqual(nicknameGenerator("Melissa"), "Mel");
assert.strictEqual(nicknameGenerator("James"), "Jam");
// Create a var that will split map to array then if else for length. Find the index of 3 and check if it's a vowel if it is slice 3 else slice 4 and finally join