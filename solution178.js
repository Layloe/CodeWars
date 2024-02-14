// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

//? Parameters: an array of srings

//? Return: concatinated string

//? Example:
// assert.strictEqual(smash(["hello", "world"]), "hello world");
// assert.strictEqual(smash(["hello", "amazing", "world"]), "hello amazing world");
// assert.strictEqual(smash(["this", "is", "a", "really", "long", "sentence"]), "this is a really long sentence");

//? Psuedocode: Use method join(' ')

const assert = require('assert')

// const smash = words => words.join(' ')

function smash (words) {
    return words.join(' ')
 };
console.log(smash(["this", "is", "a", "really", "long", "sentence"]))

 assert.strictEqual(smash(["hello", "world"]), "hello world");
 assert.strictEqual(smash(["hello", "amazing", "world"]), "hello amazing world");
 assert.strictEqual(smash(["this", "is", "a", "really", "long", "sentence"]), "this is a really long sentence");