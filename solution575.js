// You will be given two ASCII strings, a and b. Your task is write a function to determine which one of these strings is "worth" more, and return it.

// A string's worth is determined by the sum of its ASCII codepoint indexes. So, for example, the string HELLO has a value of 372: H is codepoint 72, E 69, L 76, and O is 79. The sum of these values is 372.

// In the event of a tie, you should return the first string, i.e. a.

function highestValue(a, b) {
  const findSum = a.split('').reduce((acc, curr) => {
      return  a.charCodeAt(curr)
  })
  return findSum
}
console.log(highestValue("AaBbCcXxYyZz0189", "KkLlMmNnOoPp4567"))

// Input had two parameters both strings.
// Output is one of the two parameters.
    // assert.strictEqual(highestValue("AaBbCcXxYyZz0189", "KkLlMmNnOoPp4567"), "KkLlMmNnOoPp4567")
    // assert.strictEqual(highestValue("ABcd", "0123"), "ABcd")
// Use split reduce and method charCodeAt to find sum then if else to compare what is greater and return string.