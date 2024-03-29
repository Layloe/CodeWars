// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

//? Parameters: Takes in a string of a greeting

//? Return: "Hello, <name> how are you doing today?". replace or insert the name with the argument

//? Example:
// assert.strictEqual(greet("Ryan"), "Hello, Ryan how are you doing today?");
// assert.strictEqual(greet("Shingles"), "Hello, Shingles how are you doing today?");

//? Psuedocode: Use templete literals to insert name of argument

const assert = require('assert')

// const greet = name => `Hello, ${name} how are you doing today?`

function greet(name){
    return `Hello, ${name} how are you doing today?`
  }

  console.log(greet("Taylor Swift"))

assert.strictEqual(greet("Ryan"), "Hello, Ryan how are you doing today?");
assert.strictEqual(greet("Shingles"), "Hello, Shingles how are you doing today?");