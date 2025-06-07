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

function nicknameGenerator(name){
    if (name.length > 3) {
        return name.slice(0, 3 + 'aeiou'.includes(name[2]))
    } else {
        return 'Error: Name too short'
    }
    // const vowels ='aeiou'
    // const nickGen = vowels.split('').map((item, index) => {
    //      console.log(name)
    //      if (vowels[index] === name[2]) {
    //        return vowels.slice(0, 4)
    //     } 
    // })
    // return name.slice(0, 3)
}
console.log(nicknameGenerator("Jeannie"))
// Input is a string of a name/
// Output is a three to four char string or a err message.
  assert.assertEquals(nicknameGenerator("Jimmy"), "Jim");
  assert.assertEquals(nicknameGenerator("Samantha"), "Sam");
  assert.assertEquals(nicknameGenerator("Sam"), "Error: Name too short");
  assert.assertEquals(nicknameGenerator("Kayne"), "Kay", "'y' is not a vowel");
  assert.assertEquals(nicknameGenerator("Melissa"), "Mel");
  assert.assertEquals(nicknameGenerator("James"), "Jam");
// Split and map if else for name length message. If index three contains vowel slice 3 else slice 2
