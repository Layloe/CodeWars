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
    let rotations = []
    const map = text.split('').map((item, index) => {
        rotations.push(text.slice(index) + text.slice(0, index))
   
    })
    return rotations
}
console.log(scrollingText('abc'))
// Input is a string.
// Output is uppercase array of strings that contains all possible rotations.
//   Test.assertDeepEquals(scrollingText("abc"), ["ABC","BCA","CAB"])
// Split map to uppercase use index and slice and push to mutable arr