// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

//? Parameters: a string that's a name

//? Return: a str starts with 'Hello' that's capitalized and ends with an exclamation point

//? Example:
// Test.assertEquals(greet('riley'), 'Hello Riley!')

//? Pseudocode: var [0]toUpperCase()
//? + slice()
//? template literals

const assert = require('assert')

var greet = function(name) {
    const nameSplit = name[0].toUpperCase() + name.toLowerCase().slice(1)
    return `Hello ${nameSplit}!`
}
console.log(greet('riley'))

assert.strictEqual(greet('riley'), 'Hello Riley!')