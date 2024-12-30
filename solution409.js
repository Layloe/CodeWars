// Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

const { assert } = require("console");

// Your task is to create a function that, given a proper first and last name, will return the correct alias.

// Notes:
// Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. See the examples below for further details.

// If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

// Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.
// These two objects are preloaded, you need to use them in your code
// var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
// var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

// aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
// aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'

// function aliasGen(first, last){
//     const alphabet = 
//     // 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//     ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
//     const firstName = {A: 'Alpha', B: 'Beta', C: 'Cache'}
//     const surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst'}
//     // if (first[0].toUpperCase()) {
//     //     return 'Your name must start with a letter from A - Z.'
//     // }
//     for (const curr of alphabet) {
//         first[0] == curr
//     }
//     return first
// }
// console.log(aliasGen("Daisy", "cat"))
//input is going to be two params the first name and last name. Both params will be strings
//output should be an item from the first object and item from last obj. Depending on what the argument first letters are.
// These two objects are preloaded, you need to use them in your code
    // aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
    // aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'
//first sanitize arguments to upperCase then if else if not a letter from A - Z. Make obj with A-Z to check if uppercase alphabet. Loop thru obj to find value.


// Can you implement a function that will return number of words in a string?

// You have to ensure that spaces in string is a whitespace for real.

// Let's take a look on some examples:

// countWords("Hello"); // returns 1 as int
// countWords("Hello, World!") // returns 2
// countWords("No results for search term `s`") // returns 6
// countWords(" Hello") // returns 1
// // ... and so on
// What kind of tests we made for your code:

// Function have to count words and not spaces. You have to be sure that you doing it right
// Empty string has no words.
// String with spaces around should be trimmed.
// Non-whitespace (ex. breakspace, unicode chars) should be treated as a delimiter
// Doublecheck that words with chars like -, ', ` are counted right


function countWords(str) {
    if (str == '') {
        return 0
    }
    return str.trim().split(' ').join(' ') 
  }
  console.log(countWords("  Hello     Bart  "))
  //input is a string with possible multiple words
  //output is number/sum of words in str
    // assert.assertEquals(countWords("Hello"), 1);
    // assert.assertEquals(countWords("Hello, World!"), 2);
    // assert.assertEquals(countWords("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), 19);
    // assert.assertEquals(countWords(""), 0);
    // assert.assertEquals(countWords("With! Symbol@ #Around! (Every) %Word$"), 5);
    // assert.assertEquals(countWords("Dear   Victoria, I love  to press   space button."), 8);
  //split length. if else for edge case ''
