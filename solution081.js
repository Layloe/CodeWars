// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

//Parameters: str

//Return: Coverst a str into an array of words.

// Examples (Input ==> Output):
// assert.deepEqual(stringToArray("Robin Singh"), ["Robin", "Singh"]);
// assert.deepEqual(stringToArray("I love arrays they are my favorite"), ["I", "love", "arrays", "they", "are", "my", "favorite"]);

//Psuedocode: Use method split(',')


const assert = require('assert')



function stringToArray(string){
    return string.split(' ')
}

stringToArray("Robin Singh")



assert.deepEqual(stringToArray("Robin Singh"), ["Robin", "Singh"]);
assert.deepEqual(stringToArray("I love arrays they are my favorite"), ["I", "love", "arrays", "they", "are", "my", "favorite"]);
