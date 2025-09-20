// Create a function that takes an input String and returns a String, where all the uppercase words of the input String are in front and all the lowercase words at the end. The order of the uppercase and lowercase words should be the order in which they occur.

// If a word starts with a number or special character, skip the word and leave it out of the result.

// Input String will not be empty.

// For an input String: "hey You, Sort me Already!" the function should return: "You, Sort Already! hey me"

function capitalsFirst(str){

  let results = []
  const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const upperFirst = str.split(' ').map(item =>  abc[(item[0])] ? results.push(item) : '')

  return results
}
console.log(capitalsFirst("hey You, Sort me Already!"))
// Input is a string with upper and lower case words.
// Output is a string with all the uppercase words of the input String are in front and all the lowercase words at the end.
// assert.strictEqual(capitalsFirst("hey You, Sort me Already!"), "You, Sort Already! hey me")
// Split with white space then sort, if index 0 is uppercase push to empty string.