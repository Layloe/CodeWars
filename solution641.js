// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!assert.strictEqual(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21)

// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!
const assert = require('assert')

function betterThanAverage(classPoints, yourPoints) {
  const getAverage = classPoints.reduce((acc, curr) => acc + curr, 0) / classPoints.length
  // const getLength = classPoints.length

  return getAverage < yourPoints
}
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50))
// Input is an array of numbers and a number as the second parameter.
// Output is a boolean.
assert.strictEqual(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50))
assert.strictEqual(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21))
// Create variable that will reduce to get sum of the array. Create a variable that will get the length of the array. Divide to get the average then compare to yourPoints variable.

