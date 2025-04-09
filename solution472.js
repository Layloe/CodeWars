// A Tidy Number is a number whose digits are in non-decreasing order.

// Task
// Given a number, determine if it is tidy or not.

// Notes
// The number passed will always be positive.
// Return the result as a boolean.
// Examples
// 12 ==> return true
// Explanation: Digits {1, 2} are in non-decreasing order (1 <= 2).

// 32 ==> return false
// Explanation: Digits {3, 2} are not in non-decreasing order (3 > 2).

// 1024 ==> return false
// Explanation: Digits {1, 0, 2, 4} are not in non-decreasing order (1 > 0).

// 13579 ==> return true
// Explanation: Digits {1, 3, 5, 7, 9} are in non-decreasing order.

// 2335 ==> return true
// Explanation: Digits {2, 3, 3, 5} are in non-decreasing order (3 = 3).
// Playing with Numbers Series
// Playing With Lists/Arrays Series
// For More Enjoyable Katas
// ALL translations are welcomed

// Enjoy Learning!!
function tidyNumber(n){
  const greaterThan = String(n).split('').filter((item, index, arr) => {
    if (item <= arr[index + 1] == false) {
      console.log()

      return true
    }
    else {
      return false
    }
    console.log(arr[index])
  })
 
  // for (let i = 0; i < n.length; i++) {
  //   for (let j = 0; j < n.length; j++) {
  //    if (i < j[i]) {
  //       return true
  //    } else {
  //       return false
  //    }
  //   }
  // }
  return greaterThan
}
console.log(tidyNumber(122344))
// Input will be a postive number
// Output is a boolean
// Test.assertEquals(tidyNumber(12),true);
// Test.assertEquals(tidyNumber(102),false);
// Test.assertEquals(tidyNumber(9672),false);
// Test.assertEquals(tidyNumber(2789),true);
// Test.assertEquals(tidyNumber(2335),true);
// Use a for loop and a nested for loop one then compare current item to index 
