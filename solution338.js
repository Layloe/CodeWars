// Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

// Example
// 123  => 6
// 223  => 7
// 1337 => 14

//? Parameters: a num

//? Return: a sum/num

//? Example:
// assert.strictEqual(getSumOfDigits(123), 6, 'Incorrect answer for integer=123');
// assert.strictEqual(getSumOfDigits(223), 7, 'Incorrect answer for integer=223');
// assert.strictEqual(getSumOfDigits(0), 0, 'Incorrect answer for integer=0');

//? Pseudocode: debug: use split().reduce() //study answer

const assert = require('assert')


function getSumOfDigits(integer) {
    // var sum = 0;
    // var digits =  Math.floor(integer).toString();
    // for(var i = 1; i < digits.length; i++) {
    //   sum =+ digits[i]
    // }
    // return sum
    var sum = null;
    var digits =  Math.floor(integer).toString();
    for(var ix = 0; ix < digits.length; ix++) {
      sum += +digits[ix];
    }
    return sum;
  }
  console.log(getSumOfDigits(223))


  assert.strictEqual(getSumOfDigits(123), 6, 'Incorrect answer for integer=123');
  assert.strictEqual(getSumOfDigits(223), 7, 'Incorrect answer for integer=223');
  assert.strictEqual(getSumOfDigits(0), 0, 'Incorrect answer for integer=0');