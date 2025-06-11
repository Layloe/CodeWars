// Given some positive integers, I wish to print the integers such that all take up the same width by adding a minimum number of leading zeroes. No leading zeroes shall be added to the largest integer.

// For example, given 1, 23, 2, 17, 102, I wish to print out these numbers as follows:

// 001
// 023
// 002
// 017
// 102
// Write a function that takes a variable number of integers and returns the string to be printed out.

function printNums(...args) {
    if (args == 0) {
        return ''
    } else {
        return String(args).padStart(3, '0')
    }
}
console.log(printNums(0))
// Input is a number.
// Output is a number that is padded up to the length of 2
// Example above.
// Turn args to string and use the method padStart.