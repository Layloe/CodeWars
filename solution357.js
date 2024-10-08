
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

function twoSum(nums, target) { // add to interview list
  // Step 1: Iterate over the numbers in the array.
  for(let i = 0; i < nums.length; i++) {
    // Step 2: For each number, iterate over the rest of the numbers in the array.
    for(let j = i+1; j < nums.length; j++) {
      // Step 3: Check if the current two numbers add up to the target.
      if(nums[i] + nums[j] === target) 
        return [i, j];
    }
  }
} 
console.log(twoSum([2,7,11,15]))

//Input: an array of numbers, and a target number; nums = [2,7,11,15], target = 9

//Output: An array of two numbers

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

//Use nested loops to compare each value in the array against all other values to see if they add up to target, then when they do return the index of the values.


