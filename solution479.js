// Complete the function which takes a non-zero integer as its argument.

// If the integer is divisible by 3, return the string "Java".

// If the integer is divisible by 3 and divisible by 4, return the string "Coffee"

// If one of the condition above is true and the integer is even, add "Script" to the end of the string.

// If none of the condition is true, return the string "mocha_missing!"

// Examples
// 1   -->  "mocha_missing!"
// 3   -->  "Java"
// 6   -->  "JavaScript"
// 12  -->  "CoffeeScript"

function caffeineBuzz(n){
    if (n % 12 === 0) {
        return 'Coffee' + 'Script'
    }
    if (n % 6 == 0) {
        return "Java" + "Script"
    }
    if (n % 3 == 0 ) {
        return "Java"
    }
    
    return "mocha_missing!"
}
console.log(caffeineBuzz(6))

// Input is a non-zero integer
// Output is going to be one of four strings "Java", "Coffee", "Script", "mocha_missing!"
// Example above 
// Use if else with modulus to find if divisible by num for the 
//  first conditional will be n % 3 == 0, 
//  second conditional will be n % 3 == 0 AND n % 3 == 0,
//  third conditional will be n % 3 == 0 OR n % 3 == 0 concat 'Script',
//  If none of the condition is true, return the string "mocha_missing!"