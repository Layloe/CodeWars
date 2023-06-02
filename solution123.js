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

// Psuedocode: Take the first num in the arr and iterate though the rest of the array to see(compare) if there is a match or duplicate.--Use methods filter and indexOf then compare, return the filtered items. 

//? Still needs a bit more work but got the basic solution working, still need to fix the outliers..cont tommarrow morning

const assert = require('assert')

const duplicates = arr => [...new Set(arr.filter((x, i) => arr.indexOf(x) != i))] //? Solution from codewars

// function duplicates(arr) {
  
    // let test = arr.filter((value, index) => arr.indexOf(value) !== index)
    // console.log(test)
    // return test
//   }

  console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]))

assert.deepEqual(duplicates([1, 2, 3, 4, '3']), [], "arr = [1, 2, 3, 4, '3']");
assert.deepEqual(duplicates(['1', 2, 3, 3, '2', 1]), [3], "arr = ['1', 2, 3, 3, '2', 1]");
assert.deepEqual(duplicates(['zut', 'alors', 1, 2, 4, 4, 3, 3, '1', 5, 3, 'zut']), [4, 3, 'zut'], "arr = ['zut', 'alors', 1, 2, 4, 4, 3, 3, '1', 5, 3, 'zut']");

// Eh!,Eh!,Eh!
// Arrange: The function seems to be missing or skipping a dupe and I'm not sure why yet, but I think it had to do with either them being multiables of the same number or the same number right next to each other in the arr. I'm going to try to use console.log to get more information, then use google to hopefully find a bread crumb.

//It's getting this err -->
//? code: 'ERR_ASSERTION',
//? actual: [ 4, 3, 3, 'zut' ],
//? expected: [ 4, 3, 'zut' ],
//? operator: 'deepEqual'

// Act:I tried using a visualisation tool(still need to practice using this):https://jsviz.klve.nl/#?code=GYVwdgxgLglg9mABAExABwDYwgQygUwGcAKHAJzIEpEBvAKEUcQHpnEN8oV0jEBeROTIA6ALY40xAG44MIfPwB8iGXPyUGTDlwKEuAocOAwMBMsWmz5AGkQwwyfAA9qfZYfuOnAeWCW11ACEfAKezhpMiBAIhHAcwhhwAObEulARTGScIGRIaZoAvnSa0WCx8YkpqJjYeETEANoA5ABeIFBNtk2ycGSEnYgAjLYATLYALBO2AMwzXYMDAKxziK3tTQC6lJRAA and still couldn't figure out what is going wrong. Going to use GPT to help me find out what's going wrong.

// Assert: I was on the right path as far as problem solving goes, but the method I was using, "indexOf()," stops once it finds the value/item. So if the item occurs more than once in the arr it won't 'include' it in the filtered items. The solution was to use the includes() method inside my filter. This way, if there are multiple dupes, it will filter them.

//! Turns out there are still more problems but I've ran out time, I went over time by almost double oof. I'm sure this will get easier the more I do it.

//! First attemt at using “Arrange, Act, Assert” software testing methodology. I mainly just spelt out my thought process. Will refine as time goes