// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.

//? Parameters: an array of nums

//? Return: the length of nums in the array

//? Example:
// [0, 1],
// [9, 1],
// [66, 2],
// [12345, 5],
// [128685, 6],
// [9876543210, 10],
// [9007199254740991, 16]

//? Pseudocode: var .join()
//? length
//? apparently they want me to use toString() or String(n). Not the clearest code challenge

function digits(n) {
    // const numsLength = n.join('').length
    return n.toString().length
  }
console.log(digits([12345]))

//   [0, 1],
//   [9, 1],
//   [66, 2],
//   [12345, 5],
//   [128685, 6],
//   [9876543210, 10],
//   [9007199254740991, 16] 