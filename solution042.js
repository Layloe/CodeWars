// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"


//Parameters: array of integers or an empty array
//Result: wheter the sum of the array elements is even or odd, displayes as the word "even" or "odd"
//Examples:
// assert.strictEqual(oddOrEven([0]), 'even')
//     assert.strictEqual(oddOrEven([1]), 'odd')
//     assert.strictEqual(oddOrEven([]), 'even')
//Results: use reduce method to sum the array elements and then check whetther it is odd or even using a modulus, then return the appropriate string value



function oddOrEven(arr) {
  return (arr.reduce((sum, current) => sum + current, 0) %2 ? 'odd' : 'even')
 }

oddOrEven([0, -1, -5])
