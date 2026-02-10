// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

// All values will be positive integers or floats, or zero.
const assert = require('assert')

function plural(n) {
  
    return n === 1 ? true : false
}
console.log(plural(1))
// Input is going to be a number.
// Output is a boolean.

assert.strictEqual(plural(0), true, "Plural for 0");
assert.strictEqual(plural(0.5), true, "Plural for 0.5");
assert.strictEqual(plural(1), false, "Plural for 1");
assert.strictEqual(plural(100), true, "Plural for 100");
assert.strictEqual(plural(Infinity), true, "Plural for Infinity");

// If number is less than or equal to 1 return true else return false.
