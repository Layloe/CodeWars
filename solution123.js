// Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.

// Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).

// Examples
// [1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
// [0, 1, 2, 3, 4, 5]                ==>  []

//Parameters: an arr of nums and strings

//Return: a new array of any duplicates from the original arr; the elements of the returned array should appear in the order when they first appeared as duplicates.

//Example:
// assert.deepEqual(duplicates([1, 2, 3, 4, '3']), [], "arr = [1, 2, 3, 4, '3']");
// assert.deepEqual(duplicates(['1', 2, 3, 3, '2', 1]), [3], "arr = ['1', 2, 3, 3, '2', 1]");
// assert.deepEqual(duplicates(['zut', 'alors', 1, 2, 4, 4, 3, 3, '1', 5, 3, 'zut']), [4, 3, 'zut'], "arr = ['zut', 'alors', 1, 2, 4, 4, 3, 3, '1', 5, 3, 'zut']");

// Psuedocode: Take the first num in the arr and iterate though the rest of the array to see(compare) if there is a match or duplicate.--Use methods filter and indexOf then compare, return the filtered items
const assert = require('assert')

function duplicates(arr) {
    // let dupes = arr.map(value => value)
    let test = arr.filter((value, index) => arr.indexOf(value) !== index)

    return test
  }

  console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]))

assert.deepEqual(duplicates([1, 2, 3, 4, '3']), [], "arr = [1, 2, 3, 4, '3']");
assert.deepEqual(duplicates(['1', 2, 3, 3, '2', 1]), [3], "arr = ['1', 2, 3, 3, '2', 1]");
assert.deepEqual(duplicates(['zut', 'alors', 1, 2, 4, 4, 3, 3, '1', 5, 3, 'zut']), [4, 3, 'zut'], "arr = ['zut', 'alors', 1, 2, 4, 4, 3, 3, '1', 5, 3, 'zut']");
