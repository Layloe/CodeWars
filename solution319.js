// The code provided is supposed replace all the dots . in the specified String str with dashes -

// But it's not working properly.

// Task
// Fix the bug so we can all go home early.

// Notes
// String str will never be null.

//? Parameters: a string that has dots

//? Return: replace string dots with dashes 

//? Example:
// Test.assertEquals(replaceDots("one.two.three"), "one-two-three", "Sorry, try again :-(");

//? Pseudocode: debug split join

// const replaceDots = str => str.split('.').join('-')

var replaceDots = function(str) {
    return str.split('.').join('-')
  }
  console.log(replaceDots("one.two.three"))

//   Test.assertEquals(replaceDots("one.two.three"), "one-two-three", "Sorry, try again :-(");