// Write a function that accepts two parameters, i) a string (containing a list of words) and ii) an integer (n). The function should alphabetize the list based on the nth letter of each word.

// The letters should be compared case-insensitive. If both letters are the same, order them normally (lexicographically), again, case-insensitive.

// Example:

// function sortIt('bid, zag', 2) //=> 'zag, bid'
// The length of all words provided in the list will be >= n. The format will be "x, x, x". In Haskell you'll get a list of Strings instead

function sortIt(list, n) {
    return list.split(',')
  }
  console.log(sortIt('bill, bell, ball, bull', 2))
// Input will be two params one will be a string of words and the other an integer
// Output will be a sorted string base on the second param
    // Test.assertEquals(sortIt('bill, bell, ball, bull', 2),'ball, bell, bill, bull' , 'Sort by the second letter')
    //  Test.assertEquals(sortIt('cat, dog, eel, bee', 3),'bee, dog, eel, cat' , 'Sort by the third letter')
// First I will split then map then sort