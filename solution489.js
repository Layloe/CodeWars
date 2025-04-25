// A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

// Given a series of digits as a string, determine if the number represented by the string is divisible by three.

// Example:

// "123"      -> true
// "8409"     -> true
// "100853"   -> false
// "33333333" -> true
// "7"        -> false
// Try to avoid using the % (modulo) operator.
const assert = require('assert')

function divisibleByThree(str){
    const sum = str.split('').reduce((sum, curr) => sum + Number(curr) , 0)
    return sum % 3 == 0
}
console.log(divisibleByThree('19254'))
// Input will be a string of numbers. 
// Output is a boolean.
    assert.strictEqual(divisibleByThree('123'), true, "Should return true if the sum of the given digits is divisible by 3.")
    assert.strictEqual(divisibleByThree('19254'), true, "Should return true if the sum of the given digits is divisible by 3.")
    assert.strictEqual(divisibleByThree('88'), false, "Should return false if the sum of the given digits is not divisible by 3.")
    assert.strictEqual(divisibleByThree('1'), false, "Should return false if the sum of the given digits is not divisible by 3.")
// I will split and reduce then divide by length then use if else if has remainder or not. Also remember to change data type.
