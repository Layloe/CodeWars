// You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.

// var arrowFunc = function(arr) {
//     return arr.map(nums => String.fromCharCode(nums) ).join(''); //Complete this function
//   }
const arrowFunc = (arr) => arr.map(item => String.fromCharCode(item)).join('')

  console.log(arrowFunc([70,85,83,32,82,79,72,32,68,65,72]))

//input is going o be an arr of nums
//output will be a string
//arrowFunc([84,101,115,116]), 'Test', 'Convert those numbers to letters')
// first I need to format into an arrow function then I'm going to to map over the arr with the method String.fromCharCode() and pass the item as an argument then join
