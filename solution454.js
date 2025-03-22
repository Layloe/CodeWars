// Write a function that accepts two parameters, i) a string (containing a list of words) and ii) an integer (n). The function should alphabetize the list based on the nth letter of each word.

// The letters should be compared case-insensitive. If both letters are the same, order them normally (lexicographically), again, case-insensitive.

// Example:

// function sortIt('bid, zag', 2) //=> 'zag, bid'
// The length of all words provided in the list will be >= n. The format will be "x, x, x". In Haskell you'll get a list of Strings instead

function sortIt(list, n) {
    const testObj = {}
    const cleanList = list.split(', ')
   for (currItem of cleanList) {
    if (testObj[currItem]) {
      testObj[currItem]
    } else {
      let sortLetter = currItem[n - 1]
      testObj[currItem] = sortLetter
    }
   }
    return testObj
  }
  console.log(sortIt('cat, dog, eel, bee', 3))
// Input will be two params one will be a string of words and the other an integer
// Output will be a sorted string base on the second param
    // Test.assertEquals(sortIt('bill, bell, ball, bull', 2),'ball, bell, bill, bull' , 'Sort by the second letter')
    //  Test.assertEquals(sortIt('cat, dog, eel, bee', 3),'bee, dog, eel, cat' , 'Sort by the third letter')
// First I will split, map then declare a var that will hold empty array slice the nth letter with index num to get order or
// Slice with nth num then sort and add back 
// going to try a for of