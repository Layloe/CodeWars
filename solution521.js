// Your task is very simple. Just write a function that takes an input string of lowercase letters and returns true/false depending on whether the string is in alphabetical order or not.

// Examples (input -> output)
// "kata" -> false ('a' comes after 'k')
// "ant" -> true (all characters are in alphabetical order)

// const alphabetic = s => s === s.split('').sort().join('')

function alphabetic(s) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const test = s.split('').slice(0, -1).map((item, index, arr) => {

  if (alphabet.indexOf(item) > alphabet.indexOf(s[index + 1])) {
          return false
        } else {
         return true
        }
   
  })

  return !test.includes(false)
}
console.log(alphabetic('door'))
// Input is a string of letters or numbers.
// Output is a boolean
// 
// Find alphabet then split map. Think this out if item alphabet[index] number is less than following item == true else false.
