// A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

// Given a series of digits as a string, determine if the number represented by the string is divisible by three.

// Example:

// "123"      -> true
// "8409"     -> true
// "100853"   -> false
// "33333333" -> true
// "7"        -> false
// Try to avoid using the % (modulo) operator.
function divisibleByThree(str){
    const sum = str.split('').map(Number).reduce((curr, acc) => acc + curr, 0)
    // const divideBy3 = sum / 3 
    // const multiplyBy3 = divideBy3 * 3
    // const maffsSum = multiplyBy3 - sum
    return sum % 3 == 0
}
console.log(divisibleByThree('1234'))
//input will be a string of numbers
//output will be a boolean depending on divisible by 3
    // assert.strictEqual(divisibleByThree('123'), true, "Should return true if the sum of the given digits is divisible by 3.")
    // assert.strictEqual(divisibleByThree('19254'), true, "Should return true if the sum of the given digits is divisible by 3.")
    // assert.strictEqual(divisibleByThree('88'), false, "Should return false if the sum of the given digits is not divisible by 3.")
    // assert.strictEqual(divisibleByThree('1'), false, "Should return false if the sum of the given digits is not divisible by 3.")
// cant use modules so use split reduce map to Number then conditionals 