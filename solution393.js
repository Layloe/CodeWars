// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.
const assert = require('assert')
function sumMix(x){
    return x.reduce((acc, curr) => acc + Number(curr), 0)  
}
console.log(sumMix([9, 3, '7', '3']))
//input is going to be an array of mixed data type: nums and string nums
//output will be the sum of the array
//sumMix([9, 3, '7', '3']), 22)
//going to reduce the array with the method parseInt or number constructor
assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);


// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!
function doubleChar(str) {
    return str.split('').map(item => item.repeat(2)).join('')
  }
  console.log(doubleChar('abcd'))
  //input will be a string
  //output will double each char in the input string
  //("abcd"), "aabbccdd")
  //I will first split str to arr then use map with the method repeat then finally join
  assert.strictEqual(doubleChar("abcd"), "aabbccdd");
  assert.strictEqual(doubleChar("Adidas"), "AAddiiddaass");
  assert.strictEqual(doubleChar("1337"), "11333377");
  assert.strictEqual(doubleChar("illuminati"), "iilllluummiinnaattii");
  assert.strictEqual(doubleChar("123456"), "112233445566");
  assert.strictEqual(doubleChar("%^&*("), "%%^^&&**((");