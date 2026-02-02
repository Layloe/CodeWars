// Be Concise I - The Ternary Operator
// You are given a function that takes a parameter age (which will always be a positive integer) and does the following:

// If the age is 12 or lower, it return "You're a(n) kid"
// If the age is anything between 13 and 17 (inclusive), it return "You're a(n) teenager"
// If the age is anything between 18 and 64 (inclusive), it return "You're a(n) adult"
// If the age is 65 or above, it return "You're a(n) elderly"
// Your task is to shorten the code as much as possible. Note that submitting the given code will not work because there is a character limit of 137.

// I'll give you a few hints:

// The title itself is a hint - if you're not sure what to do, always research any terminology in this description that you have not heard of!
// Don't you think the whole "You're a(n) <insert_something_here>" is very repetitive? ;) Perhaps we can shorten it?
// Write everything in one line, \n and other whitespaces counts.
// Whatever you do, do not change what the function does. Good luck :)
const assert = require('assert')


function describeAge(age) {

    return age <= 12 
    ? "You're a(n) kid" 
    : age <= 17 
    ? "You're a(n) teenager"
    : age <= 64 
    ? "You're a(n) adult" 
    : "You're a(n) elderly" 
}
console.log(describeAge(9))
// Input is a number.
// Output is one of four strings.
assert.strictEqual(describeAge(9),   "You're a(n) kid");
assert.strictEqual(describeAge(10),  "You're a(n) kid");
assert.strictEqual(describeAge(11),  "You're a(n) kid");
assert.strictEqual(describeAge(12),  "You're a(n) kid");

assert.strictEqual(describeAge(13),  "You're a(n) teenager");
assert.strictEqual(describeAge(14),  "You're a(n) teenager");
assert.strictEqual(describeAge(15),  "You're a(n) teenager");
assert.strictEqual(describeAge(16),  "You're a(n) teenager");
assert.strictEqual(describeAge(17),  "You're a(n) teenager");

assert.strictEqual(describeAge(18),  "You're a(n) adult");
assert.strictEqual(describeAge(19),  "You're a(n) adult");
assert.strictEqual(describeAge(63),  "You're a(n) adult");
assert.strictEqual(describeAge(64),  "You're a(n) adult");

assert.strictEqual(describeAge(65),  "You're a(n) elderly");
assert.strictEqual(describeAge(66),  "You're a(n) elderly");
assert.strictEqual(describeAge(100), "You're a(n) elderly");
// Chained turnery operator. Compare number and return string with age constraints.
