// Count Vowels

// Challenge: Write a JavaScript function that counts the number of vowels in a given string
function countVowels(str) {
    return str.split('').filter(item => 'aeiou'.includes(item) ).length
}
console.log(countVowels('lets go!'))
//input is going to be a string
//output will be a number/sum
//no examples
// first split the str then filter with the method includes and finally length

// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.
function isUpperCase(str) {
    const alphabetUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return str.includes(!alphabetUpperCase)
}
console.log(isUpperCase('UHGKJH'))
//input is going o be a str
//output will be a boolean
//'Hello World', false
//use alphabet str and the method includes

