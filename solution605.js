// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if at least one Ruby developer has signed up; or
// false if there will be no Ruby developers.
// For example, given the following input array:

var list1 = [
  { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];
var list2 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' } 
];
// your function should return true.
const assert = require('assert')

const isRubyComing = list => list.some(item => item.language === 'Ruby')
 
// function isRubyComing(list) {
//   const rubyDev = list.some(item => {
//     if (item.language === 'Ruby') {
//         return true
//     }
//     })
//   return rubyDev 
// }
console.log(isRubyComing(list1))
// Input is an array of objects.
// Output is a boolean.
// Example above.
assert.strictEqual(isRubyComing(list1), true);
assert.strictEqual(isRubyComing(list2), false);
// Use find/some to loop through argument with an if else to check if true.