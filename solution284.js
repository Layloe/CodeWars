// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

//? Parameters: a string sentence 

//? Return: a sentence with each word in the sentence capitalized 

//? Example:
// Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");

//? Pseudocode: new var
//? split(' ')
//? map()
//? toUpperCase() + 
//? slice(1)
//? join()

const assert = require('assert')

function toJadenCase(str) {

    const capitalizeEachItem = str.split(' ').map(item => item[0].toUpperCase() + item.slice(1)) 
     
    return capitalizeEachItem.join(' ')
}
console.log(toJadenCase("How can mirrors be real if our eyes aren't real"))

    assert.strictEqual(1 + 1, 2)