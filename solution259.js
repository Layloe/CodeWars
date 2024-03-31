// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust

//? Prameters: an arr of nums

//? Return: a number or sum of the array

//? Example:
// assert.strictEqual(sumOfDifferences([1, 2, 10]), 9);
// assert.strictEqual(sumOfDifferences([-3, -2, -1]), 2);

//? Psuedocode: sort array in desc
//? declare some vars if it gets to sticky
//? use index's to do mafs
//? 

// const assert = require('assert')       //! instruction should of been subtract largest num from smallest num.. appearently this is an algo that streaches beyond test cases: return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;

function sumOfDifferences(arr) {
//    const arrSort = arr.sort((a, b) => b - a)
//    if (arrSort.length <= 0 || arrSort === NaN || arrSort == []) {
//         return 0
//    }
//    const firstMafs = arrSort[0] - arrSort[1]
//    const secondMafs = arrSort[1] - arrSort[2]

//    return firstMafs + secondMafs
return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;

}
console.log(sumOfDifferences([4,3,4,0,-4,4,2,-4,-3,2,-3,-6,0,-4,4,-4,-6,1,-6,-5,3,-3,-2,0]))

// assert.strictEqual(sumOfDifferences([1, 2, 10]), 9);
// assert.strictEqual(sumOfDifferences([-3, -2, -1]), 2);