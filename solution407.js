// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

const { assert } = require("console")

// If they are, change the array value to a string of that vowel.

// Return the resulting array.
function isVow(arr){
    // let map = {
    //     97: 'a',
    //     101: 'e',
    //     105: 'i',
    //     111: 'o',
    //     117: 'u',
    //   }
    //   return arr.map(item => map[item] ? map[item] : item)
    const numToLetters = arr
    .map(item => String.fromCharCode(item))
    .map(item => 'aeiou'.includes(item) ? item : item.charCodeAt())

    return numToLetters
    // .map(item => 'aeiou'.includes(item) ? item : item.charCodeAt())
  }
  console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]))
  //input will be an array of numbers
  //output will be an array of numbers with character codes for lower case vowels  (a, e, i, o, u)
//   [118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106], 
//   [118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]
//first thing I will do create a var that will change nums to letters. Use map with String.fromCharCode(). 'a,e,i,o,u' to compare 



// Arrow style Functions
// Come here to practice the Arrow style functions Not much else to say good luck!
// Details
// You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.

// Examples
// These are example of how to convert a number to an ascii Character:
// Javascript => String.fromCharCode(97) // a
// C# => Tools.FromCharCode(97) // a
const arrowFunc = (arr) => arr.map(item => String.fromCharCode(item)).join('')
console.log(arrowFunc([70,85,83,32,82,79,72,32,68,65,72]))
// assert.strictEqual(ArrowFunc([84,101,115,116]), 'Test', 'Convert those numbers to letters')
// assert.strictEqual(ArrowFunc([70,85,83,32,82,79,72,32,68,65,72]), 'FUS ROH DAH', 'Keep it up!')
//input will be an array of ascii numbers 
//output will be converted ascii numbers to letters



// Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
// Task
// Your task is to return the correct string using the Template String Feature.
// Input
// Two Strings, no validation is needed.
// Output
// You must output a string containing the two strings with the word ```' are '```
  function templateStrings(noun, adjective) {
    return `${noun} are ${adjective}`
  }
  console.log(templateStrings('Animals', 'Good'))
  //input str
  //output constructed string using template literals
  //bad examples
  //use template literals