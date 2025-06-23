// Contains Duplicate
// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1:

// Input: nums = [1, 2, 3, 3]

// Output: true

// Example 2:

// Input: nums = [1, 2, 3, 4]

// Output: false

function dup(arr) {
    let results = []
    for (item of arr) {
        if (results[item]) {
            results[item] 
        } else {
            results[item] 
        }
    }
    return results
    
}
console.log(dup([1, 2, 3, 3]))
// Input is an array of numbers.
// Output is a boolean.
// Example above.
// Map then use if else if item contains index.