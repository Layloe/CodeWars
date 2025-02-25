// Let's create some scrolling text!

// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

// Example
// scrollingText("codewars") should return:

// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]

function scrollingText(text){
    let possibleRotations = []

    for (let i = 0; i < text.length; i++) {
        possibleRotations.push((text.slice(i) + text.slice(0, i)).toUpperCase())
    }
    return possibleRotations
  }
  console.log(scrollingText("CODEWARS"))
  // input will be an array of strings.
  // output will be an array of strings with all possible rotations of the given string, in uppercase.
//   Test.assertDeepEquals(scrollingText("abc"), ["ABC","BCA","CAB"])
  // First I will split the array then map to crate an iterable array then use index to cycle the char through the string. Welp that didn't work hashmap it is. Had to look at answers and learned about passing i into the slice function.