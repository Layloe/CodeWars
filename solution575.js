// You will be given two ASCII strings, a and b. Your task is write a function to determine which one of these strings is "worth" more, and return it.

// A string's worth is determined by the sum of its ASCII codepoint indexes. So, for example, the string HELLO has a value of 372: H is codepoint 72, E 69, L 76, and O is 79. The sum of these values is 372.

// In the event of a tie, you should return the first string, i.e. a.
const assert = require('assert')

function highestValue(a, b) {
  const findSumA = a.split('').map(item => a.charCodeAt(item)).reduce((acc, curr) => curr + acc)
  const findSumB = b.split('').map(item => b.charCodeAt(item)).reduce((acc, curr) => curr + acc)
  if (findSumA == findSumB) {
    return a
  }

  return findSumB > findSumA ? b : a
}
console.log(highestValue("AaBbCcXxYyZz0189", "KkLlMmNnOoPp4567"))

// Input had two parameters both strings.
// Output is one of the two parameters.
    assert.strictEqual(highestValue("AaBbCcXxYyZz0189", "KkLlMmNnOoPp4567"), "KkLlMmNnOoPp4567")
    assert.strictEqual(highestValue("ABcd", "0123"), "ABcd")
// Use split reduce and method charCodeAt to find sum then if else to compare what is greater and return string.