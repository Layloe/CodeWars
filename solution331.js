// Functional closures can get overly attached. Set them straight!

// Why doesn't greetAbe() actually greet Abe?

//? Parameters: none, make the function work

//? Return: a greeting/ str

//? Example:
// assert.strictEqual(greet_abe(), 'Hello, Abe!', 'greet_abe() is not greeting Abe');
// assert.strictEqual(greet_ben(), 'Hello, Ben!', 'greet_ben() is not greeting Ben');

//? Pseudocode: debug: restructure function place var in correct position

// const greet_abe = (name = "Abe" ) =>   "Hello, " + name + '!'
// const greet_ben = (name = "Ben" ) =>   "Hello, " + name + '!'

const assert = require('assert')

var greet_abe = function() {
    var name = 'Abe';
  return "Hello, " + name + '!';
};
console.log(greet_abe())
var greet_ben = function() {
    let name = 'Ben';
  return "Hello, " + name + '!';
};
console.log(greet_ben())


assert.strictEqual(greet_abe(), 'Hello, Abe!', 'greet_abe() is not greeting Abe');
assert.strictEqual(greet_ben(), 'Hello, Ben!', 'greet_ben() is not greeting Ben');