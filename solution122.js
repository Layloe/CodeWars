// Rick wants a faster way to get the product of the largest pair in an array. Your task is to create a performant solution to find the product of the largest two integers in a unique array of positive numbers.
// All inputs will be valid.
// Passing [2, 6, 3] should return 18, the product of [6, 3].

// Disclaimer: only accepts solutions that are faster than his, which has a running time O(nlogn).

// maxProduct([2, 1, 5, 0, 4, 3])              // 20
// maxProduct([7, 8, 9])                       // 72
// maxProduct([33, 231, 454, 11, 9, 99, 57])   // 104874

//Parameters:an arr of nums

//Return: the product of the largest two integers in a unique array of positive numbers.

//Example:
// Test.assertEquals(maxProduct([56, 335, 195, 443, 6, 494, 252]), 218842);
// Test.assertEquals(maxProduct([154, 428, 455, 346]), 194740);
// Test.assertEquals(maxProduct([39, 135, 47, 275, 37, 108, 265, 457, 2, 133, 316, 330, 153, 253, 321, 411]), 187827);
// Test.assertEquals(maxProduct([136, 376, 10, 146, 105, 63, 234]), 87984);
// Test.assertEquals(maxProduct([354, 463, 165, 62, 472, 53, 347, 293, 252, 378, 420, 398, 255, 89]), 218536);
// Test.assertEquals(maxProduct([346, 446, 26, 425, 432, 349, 123, 269, 285, 93, 75, 14]), 192672);
// Test.assertEquals(maxProduct([134, 320, 266, 299]), 95680);
// Test.assertEquals(maxProduct([114, 424, 53, 272, 128, 215, 25, 329, 272, 313, 100, 24, 252]), 139496);
// Test.assertEquals(maxProduct([375, 56, 337, 466, 203]), 174750);


//Psuedocode:I'm going to skip the algo part for now-- sort the arr and extract the index of the two highest nums then mutiply

//? I'm going to start practicing the brute force method to help me learn to organize the steps in my head so I don't get overwhelmed when communicating in technical interviews.

const assert = require('assert')

function maxProduct(a) {

    let sorted = a.sort(((a, b) => b - a))
    // let lengths = sorted.length
    let largestNum = sorted[0]
    let secondLargestNum = sorted[1]
    let mafs = largestNum * secondLargestNum
    return mafs
  }

  console.log(maxProduct([56, 335, 195, 443, 6, 494, 252]))

  assert.deepEqual(maxProduct([56, 335, 195, 443, 6, 494, 252]), 218842);
  assert.deepEqual(maxProduct([154, 428, 455, 346]), 194740);
  assert.deepEqual(maxProduct([39, 135, 47, 275, 37, 108, 265, 457, 2, 133, 316, 330, 153, 253, 321, 411]), 187827);
  assert.deepEqual(maxProduct([136, 376, 10, 146, 105, 63, 234]), 87984);
  assert.deepEqual(maxProduct([354, 463, 165, 62, 472, 53, 347, 293, 252, 378, 420, 398, 255, 89]), 218536);
  assert.deepEqual(maxProduct([346, 446, 26, 425, 432, 349, 123, 269, 285, 93, 75, 14]), 192672);
  assert.deepEqual(maxProduct([134, 320, 266, 299]), 95680);
  assert.deepEqual(maxProduct([114, 424, 53, 272, 128, 215, 25, 329, 272, 313, 100, 24, 252]), 139496);
  assert.deepEqual(maxProduct([375, 56, 337, 466, 203]), 174750);