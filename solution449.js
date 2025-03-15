// Jenny is 9 years old. She is the youngest detective in North America. Jenny is a 3rd grader student, so when a new mission comes up, she gets a code to decipher in a form of a sticker (with numbers) in her math notebook and a comment (a sentence) in her writing notebook. All she needs to do is to figure out one word, from there she already knows what to do. And here comes your role - you can help Jenny find out what the word is!

// In order to find out what the word is, you should use the sticker (array of 3 numbers) to retrieve 3 letters from the comment (string) that create the word.

// Each of the numbers in the array refers to the position of a letter in the string, in increasing order.
// Spaces are not places, you need the actual letters. No spaces.
// The returned word should be all lowercase letters.
// if you can't find one of the letters using the index numbers, return "No mission today". Jenny would be very sad, but that's life... :(
// Example: input: [5, 0, 3], "I Love You" output: "ivy" (0 = "i", 3 = "v", 5 = "y")
const assert = require('assert')

function missingWord(nums, str) {
    let decipher = []
    const numsArrSort = nums.sort((a, b) => a - b)
    const cleanStrToArray = str.split(' ').join('').split('')

    if (Math.max(...nums) > cleanStrToArray.length) {
         return "No mission today"
    }
    cleanStrToArray.map((item, index) => {
        decipher.push(cleanStrToArray[numsArrSort[index]])
    })
    
    return decipher.join('').toLowerCase()
  }
  console.log(missingWord([12, 4, 6], "Good Morning"))
  // Input will have two parameters one is an array of nums the other is a string.
  // Output is a string that will contain the index location of a letter from a sorted array in         ascending order.
  assert.strictEqual(missingWord([5, 0, 3], "I love you"), "ivy")
  assert.strictEqual(missingWord([29, 31, 8], "The quick brown fox jumps over the lazy dog"), "bay")
  assert.strictEqual(missingWord([12, 4, 6], "Good Morning"), "No mission today")
  // Split and map to loop thru string and using the index of the array to push to and empty array then join. 
