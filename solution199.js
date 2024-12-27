// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

//? Parameters: a string

//? Return: a sting with exclamation mark removed form end of a string

//? Example:
// assert.strictEqual("Hi!", "Hi");
// assert.strictEqual("Hi!!!", "Hi!!");
// assert.strictEqual("!Hi", "!Hi");

//? Psuedocode: conditonals slice(0,-1)

const assert = require('assert')

// const remove = string => string.at(-1) == '!' ? string.slice(0,-1) : string

function remove (string) {
    
    return string.at(-1) == '!' ? string.slice(0,-1) : string
  }
console.log(remove("Hi!!!"))

  assert.strictEqual(remove("Hi!"), "Hi");
  assert.strictEqual(remove("Hi!!!"), "Hi!!");
  assert.strictEqual(remove("!Hi"), "!Hi");