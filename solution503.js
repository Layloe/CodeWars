// Write a function that removes every lone 9 that is inbetween 7s.

// "79712312" --> "7712312"
// "79797"    --> "777"

function sevenAte9(str) {

  return str.split('797').join('77')
}
console.log(sevenAte9("165561786121789797"))
// Input is a string of numbers.
// Output is the string but with '9' removed.
// Example is above
// Split with '797' then join with 77.