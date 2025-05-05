// Dot Calculator
// You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

// Here are the following valid operators :

// + Addition
// - Subtraction
// * Multiplication
// / Integer Division
// Your Work (Task)
// You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.

// Examples (Input => Output)
// * "..... + ..............." => "...................."
// * "..... - ..."             => ".."
// * "..... - ."               => "...."
// * "..... * ..."             => "..............."
// * "..... * .."              => ".........."
// * "..... // .."             => ".."
// * "..... // ."              => "....."
// * ". // .."                 => ""
// * ".. - .."                 => ""
const assert = require('assert')

function dotCalculator (equation) {
    const findNums = equation.split(' ').map(item => item.includes('.') ? item.length : item).join(' ')
    const sum = eval(findNums)

    return '.'.repeat(sum)
}
console.log(dotCalculator("..... + ..............."))
assert.strictEqual(dotCalculator("..... + ..............."), "....................")
// Input is a string containing '.' separated by a math operator flowed by more ""."'s.
// Output is a string that had the result in "."'s. 
// Example is above
// Create a var then split with white space then map to get length then join. Use template literals or push to a mutable var.