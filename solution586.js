// Your task is very simple. Just write a function that takes an input string of lowercase letters and returns true/false depending on whether the string is in alphabetical order or not.

// Examples (input -> output)
// "kata" -> false ('a' comes after 'k')
// "ant" -> true (all characters are in alphabetical order)
// Good luck :)

function alphabetic(s) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const checkStr = s.split('').sort().map((item, index)=> {
    console.log(alphabet.indexOf(item))
    if (alphabet.indexOf(item) < alphabet.indexOf((item + 1)) ) {
        return true
    }
  })

  return checkStr 
}
console.log(alphabetic('asd'))
// Input is a string of lowercase letters.
// Output is a boolean that depends on whether or not the words are in alphabetical order.
    // assert.strictEqual("asd", false);
    // assert.strictEqual("codewars", false)
    // assert.strictEqual("door", true);
    // assert.strictEqual("cell", true);
    // assert.strictEqual("z", true);
    // assert.strictEqual("", true);  
// Split and sort and if else to see if index is lower then the following index.