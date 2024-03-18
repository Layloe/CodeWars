// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
// Happy coding!

//? Prameters: two prams both contian numbered arrays

//? Return: concat both arrays

//? Example:
// assert.deepEqual(mergeArrays([1,2,3,4], [5,6,7,8]), [1,2,3,4,5,6,7,8], "Basic tests");
// assert.deepEqual(mergeArrays([1,3,5,7,9], [10,8,6,4,2]), [1,2,3,4,5,6,7,8,9,10], "Basic tests");
// assert.deepEqual(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]), [1,2,3,4,5,7,9,10,11,12], "Basic tests");

//? Psuedocode: declare var to remove dups
//? use the spread operator or concat
//? sort()
//? filter() duplicates 

const assert = require('assert')

// const mergeArrays = (arr1, arr2) => [...arr1,...arr2]

function mergeArrays(arr1, arr2) {
    const sortArr = [...arr1,...arr2].sort((a, b) => a - b)
    const removeDups = [...new Set(sortArr)]  //? learn abiout [...new Set(arr)]
  return   removeDups

}
console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]))

// assert.deepEqual(mergeArrays([1,2,3,4], [5,6,7,8]), [1,2,3,4,5,6,7,8], "Basic tests");
// assert.deepEqual(mergeArrays([1,3,5,7,9], [10,8,6,4,2]), [1,2,3,4,5,6,7,8,9,10], "Basic tests");
// assert.deepEqual(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]), [1,2,3,4,5,7,9,10,11,12], "Basic tests");