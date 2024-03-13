// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

//? Prameters: an array of numbers

//? Return: a number that is the medium of array

//? Example:
// assert.strictEqual(findAverage([1,1,1]), 1);
// assert.strictEqual(findAverage([1,2,3]), 2);
// assert.strictEqual(findAverage([1,2,3,4]), 2.5);

//? Psuedocode: create a variable that will reduce array to single sum 
//? length
//? sum / length
//? fix edge case

const assert = require('assert')

// const findAverage = arr =>  arr.length ? arr.reduce((sum,curr) => sum + curr, 0) / arr.length : 0

function findAverage(array) {
    if (array.length == 0){
        return 0
    }
    const reduceArr = array.reduce((sum,curr) => sum + curr, 0)
    return  reduceArr / array.length 
  }
console.log(findAverage([1,2,3,4]))

  assert.strictEqual(findAverage([1,1,1]), 1);
  assert.strictEqual(findAverage([1,2,3]), 2);
  assert.strictEqual(findAverage([1,2,3,4]), 2.5);