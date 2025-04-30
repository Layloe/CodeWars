// Compare two strings by comparing the sum of their values (ASCII character code).

// For comparing treat all letters as UpperCase
// null/NULL/Nil/None should be treated as empty strings
// If the string contains other characters than letters, treat the whole string as it would be empty
// Your method should return true, if the strings are equal and false if they are not equal.

// Examples:
// "AD", "BC"  -> equal
// "AD", "DD"  -> not equal
// "gf", "FG"  -> equal
// "zz1", ""   -> equal (both are considered empty)
// "ZzZz", "ffPFF" -> equal
// "kl", "lz"  -> not equal
// null, ""    -> equal


function compare(s1, s2) {
    const uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const toAsciiS1 = s1.split('').map((item, index) => uppercaseAlphabet.includes(item.toUpperCase()) ? item.charCodeAt() : '').reduce((acc, sum) => sum + acc)
    const toAsciiS2 = s1.split('').map((item, index) => uppercaseAlphabet.includes(item.toUpperCase()) ? item.charCodeAt() : '').reduce((acc, sum) => sum + acc)

return toAsciiS1
}
console.log(compare('AD', 'DD'))

// Input has two parameters that are both strings containing random chars
// Output is a boolean that is dependent on sum value 
// Example above
// Create a variable that will split map params to uppercase with an if else that checks if it's an uppercase alphabetic letter then charCodeAt to find the ascii num then reduce and compare