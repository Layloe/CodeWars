// It is easy to join two strings together like this string1 + string2.

// Another way to get the desired result would be with string1.concat(string2)

// ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.

// + , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!

// If one of the arguments is a number your code must coerce it into being a string.

//? Prameters: two params that both take in a string or nums

//? Return: a concatinated string without using + , .concat() & .join(). If one of the arguments is a number your code must coerce it into being a string

//? Example:
// assert.strictEqual(joinStrings('string1', 'string2'), 'string1 string2');
// assert.strictEqual(joinStrings('testing', 'testing'), 'testing testing');
// assert.strictEqual(joinStrings(134, 234), '134 234');

//? Psuedocode: declare two vars
//? change nums toString
//? template litterals
const util = require('util')
const assert = require('assert')

// const joinStrings = (a,b) => `${a.toString()} ${b.toString()}`

function joinStrings(string1, string2){
    const numToStr1 = string1.toString()
    const numToStr2 = string2.toString()
    
    return `${numToStr1} ${numToStr2}`
   
 }
console.log(util.inspect(joinStrings(134, 234)))

 assert.strictEqual(joinStrings('string1', 'string2'), 'string1 string2');
 assert.strictEqual(joinStrings('testing', 'testing'), 'testing testing');
 assert.strictEqual(joinStrings(134, 234), '134 234');