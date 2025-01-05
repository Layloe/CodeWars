const assert = require('assert')
// Description:

// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// const { assert } = require("console");

// Your task is to return:

// true if at least one Ruby developer has signed up; or
// false if there will be no Ruby developers.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
//   { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
// ];
// your function should return true.

// Notes:

// The input array will always be valid and formatted as in the example above.
function isRubyComing(list) {
    for (const curr of list) {
        if (curr.language == "Ruby") {
            return true
        }
    }
    return false
  }
  console.log(isRubyComing( [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' } 
  ]))
//input will be an arr of objects
//output will be a boolean
//see above for example
//for of loop and compare if the str 'Ruby' is in the obj arr



// Definition
// A Tidy number is a number whose digits are in non-decreasing order.

// Task
// Given a number, Find if it is Tidy or not .

// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// Number passed is always Positive .

// Return the result as a Boolean

// Input >> Output Examples
// tidyNumber (12) ==> return (true)
// Explanation:
// The number's digits { 1 , 2 } are in non-Decreasing Order (i.e) 1 <= 2 .

// tidyNumber (32) ==> return (false)
// Explanation:
// The Number's Digits { 3, 2} are not in non-Decreasing Order (i.e) 3 > 2 .

// tidyNumber (1024) ==> return (false)
// Explanation:
// The Number's Digits {1 , 0, 2, 4} are not in non-Decreasing Order as 0 <= 1 .

// tidyNumber (13579) ==> return (true)
// Explanation:
// The number's digits {1 , 3, 5, 7, 9} are in non-Decreasing Order .

// tidyNumber (2335) ==> return (true)
// Explanation:
// The number's digits {2 , 3, 3, 5} are in non-Decreasing Order , Note 3 <= 3
// const assert = require('assert')
function tidyNumber(n){
    const toStrToNum = String(n).split('').map(Number)
    //    const numArr = toStrToNum.map((item, index, arr) => {       
    //     if (arr[index + 1] > item) {
    //         return false
    //     }
    // })
    // return numArr.slice(0, -1).includes(undefined)
    return toStrToNum.sort((a, b) => a - b).join('') == n
  }
  console.log(tidyNumber(2789))
  //input will always be a number 
  //output will be a boolean depending on if digits are in non-decreasing order.
  assert.strictEqual(tidyNumber(12),true);
  assert.strictEqual(tidyNumber(102),false);
  assert.strictEqual(tidyNumber(9672),false);
  assert.strictEqual(tidyNumber(2789),true);
  assert.strictEqual(tidyNumber(2335),true);
  //loop thru use the index + 1 then subtact from curr if num is less then curr