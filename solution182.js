// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

//? Parameters: a string

//? Return: split a string and convert it into an array of words

//? Example:
// assert.deepEqual(stringToArray("Robin Singh"), ["Robin", "Singh"]);
// assert.deepEqual(stringToArray("I love arrays they are my favorite"), ["I", "love", "arrays", "they", "are", "my", "favorite"]);

//? Psuedocode: use method split(' ')

const assert = require('assert')

// const stringToArray = string => string.split(' ')

function stringToArray(string){

	return string.split(' ')

}
console.log(stringToArray("I love arrays they are my favorite"))

assert.deepEqual(stringToArray("Robin Singh"), ["Robin", "Singh"]);
assert.deepEqual(stringToArray("I love arrays they are my favorite"), ["I", "love", "arrays", "they", "are", "my", "favorite"]);
