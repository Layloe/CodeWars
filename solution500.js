// Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.

// Examples
// ("hello", "world", "l")       ==>  "held"
// ("coding", "anywhere", "n")   ==>  "codinywhere"
// ("jason", "samson", "s")      ==>  "jasamson"
// ("wonderful", "people", "e")  ==>  "wondeople"
const assert = require('assert')

function stringMerge(string1, string2, letter){
    const firstArg = string1.indexOf(letter)
    const secondArg = string2.indexOf(letter)

    return `${string1.slice(0, firstArg)}${string2.slice(secondArg)}`
  }
  console.log(stringMerge("person","here", "e"))

  // Input will have three parameters all strings the last parameter will be a single char.
  // Output will be a concatenated string of the first two parameters with the last being where it is concatenated. 
  assert.strictEqual(stringMerge("person","here", "e"), "pere");
  assert.strictEqual(stringMerge("apowiejfoiajsf","iwahfeijouh", "j"), "apowiejouh");
  assert.strictEqual(stringMerge("abcdefxxxyzz","abcxxxyyyxyzz", "x"), "abcdefxxxyyyxyzz");
  assert.strictEqual(stringMerge("12345654321","123456789", "6"), "123456789");
  assert.strictEqual(stringMerge("JiOdIdA4","oopopopoodddasdfdfsd", "d"), "JiOdddasdfdfsd");
  assert.strictEqual(stringMerge("incredible","people", "e"), "increople");
  // Create a var then split map then use letter param to find index location then slice at location of index. Do this for for both params then use template literals to concat