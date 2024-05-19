// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// "312" should return "333122"
// "102269" should return "12222666666999999999"

//? Parameters: a string made of digits [0-9]

//? Return: a string where each digit is repeated a number of times equals to its value

//? Example:
// "312" should return "333122"
// "102269" should return "12222666666999999999"

//? Pseudocode: var split()
//? map()
//? repeat()
//? Number()
//? join()
//? edge cases      

// const assert = require('assert')

function explode(s) { 
    const splitStrToNum = s.split('').map((item, index) => item == '0'  ? "" : item.repeat(Number(item), index))
  
    return splitStrToNum.join('')
} 
  console.log(explode("102269"))

//   "312" should return "333122"
// "102269" should return "12222666666999999999"