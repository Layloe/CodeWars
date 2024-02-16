// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

//? Parameters: two params both take in strings

//? Return: two strings that depend on the outcome of a boolean

//? Example:
// Test.assertEquals(greet('Daniel', 'Daniel'), 'Hello boss')
// Test.assertEquals(greet('Greg', 'Daniel'), 'Hello guest')

//? Psuedocode: use ifesle to compare if both params contain the same string, return one string if true othe if false

const assert = require('assert')

// const greet = (name, owner) => name == owner ? 'Hello boss' : 'Hello guest'

function greet (name, owner) {
    if (name == owner) {
       return 'Hello boss'
    } else {
      return  'Hello guest'
    }
  }
console.log(greet('Greg', 'Daniel'))

assert.strictEqual(greet('Daniel', 'Daniel'), 'Hello boss')
assert.strictEqual(greet('Greg', 'Daniel'), 'Hello guest')