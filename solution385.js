// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.
const assert = require('assert')

// const removeChar = str => str.split('').slice(1,-1).join('')
function removeChar(str){
    return str.split('').slice(1,-1).join('')
   
   };
   console.log(removeChar('eloquent'))
   assert.strictEqual(removeChar('eloquent'), 'loquen');
   assert.strictEqual(removeChar('country'), 'ountr');
   assert.strictEqual(removeChar('person'), 'erso');
   assert.strictEqual(removeChar('place'), 'lac');
   assert.strictEqual(removeChar('ooopsss'), 'oopss')

   //input is going to be a string with greater than 2 chars
   //output will be the same string but with first and last char removed
   //'country'), 'ountr'
   //split str then slice and finally join


// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
const stringToNumber = function(str){
    // put your code here
    return parseInt(str)
  }
  console.log(stringToNumber('1234'))
  //input is a string
  //output will be a num
  //use method parseInt


//   Write a function that removes the spaces from the string, then return the resultant string.

// Examples (Input -> Output):

// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"

const noSpace = x => x.split(' ').join('')
// function noSpace(x){
// return x.split(' ').join('')
// }
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))
//input will be a string with white space
//output will be a string with no white space
//('8aaaaa dddd r     '), '8aaaaaddddr')
//return using methods split with white space and join