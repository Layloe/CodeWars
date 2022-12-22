// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

//Parameters: Takes in an arr of nums

//Return: A num that is squared each number passed into it and then sums the results together

//Example:
// assert.strictEqual(squareSum([1,2]), 5);
// assert.strictEqual(squareSum([0, 3, 4, 5]), 50);
// assert.strictEqual(squareSum([]), 0);

//Psuedocode: Use exponentiation operator marked by two asterisk symbols ( **)

const assert = require('assert')


    function squareSum(numbers){
        return numbers.reduce(function(sum, n){  //! Called time oof
          return (n*n) + sum;
        }, 0)
      }



squareSum([1,2])

// assert.strictEqual(squareSum([1,2]), 5);
// assert.strictEqual(squareSum([0, 3, 4, 5]), 50);
// assert.strictEqual(squareSum([]), 0);