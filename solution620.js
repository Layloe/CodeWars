// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

function betterThanAverage(classPoints, yourPoints) {
  const getAverage = classPoints.reduce((acc, curr) => acc + curr, 0) / classPoints.length

  return yourPoints > getAverage
}
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))
// assert.strictEqual(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true)
// Input is an array of numbers and second parameter is a number.
// Output is a boolean.
// Example in test.
// Reduce and divide sum by length of array. Then compare second parameter to average.