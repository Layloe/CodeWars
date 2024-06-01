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

//? Parameters: a string of a name

//? Return: a string with the first 3 or 4 chars

//? Example:
// Test.assertEquals(nicknameGenerator("Jimmy"), "Jim");
// Test.assertEquals(nicknameGenerator("Samantha"), "Sam");
// Test.assertEquals(nicknameGenerator("Sam"), "Error: Name too short");
// Test.assertEquals(nicknameGenerator("Kayne"), "Kay", "'y' is not a vowel");
// Test.assertEquals(nicknameGenerator("Melissa"), "Mel");
// Test.assertEquals(nicknameGenerator("James"), "Jam");

//? Pseudocode: var vowels = 'aeiou'
// bracket notation
// includes
// conditionals 
// edge cases

  const assert = require('assert')

function nicknameGenerator(name){ 
    if (name.length <= 3){
      return 'Error: Name too short'
    }
      const vowels = 'aeiou'
      const nameSplit =  name[2].includes(...vowels) ? name.slice(0,4) : name.slice(0,3)        
       
      return nameSplit

}
console.log(nicknameGenerator("Samantha"))

assert.strictEqual(nicknameGenerator("Jimmy"), "Jim");
assert.strictEqual(nicknameGenerator("Samantha"), "Sam");
assert.strictEqual(nicknameGenerator("Sam"), "Error: Name too short");
assert.strictEqual(nicknameGenerator("Kayne"), "Kay", "'y' is not a vowel");
assert.strictEqual(nicknameGenerator("Melissa"), "Mel");
assert.strictEqual(nicknameGenerator("James"), "Jam");