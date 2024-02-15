// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.


//? Parameters: two parameters one is going to be an array of mixed values and the other is a value that contains diffrent data types

//? Return: a boolean that depends on whether or not the value is included in the array

//? Example:
// assert.strictEqual(check([66, 101], 66), true);
// assert.strictEqual(check([101, 45, 75, 105, 99, 107], 107), true);
// assert.strictEqual(check(['t', 'e', 's', 't'], 'e'), true);
// assert.strictEqual(check(['what', 'a', 'great', 'kata'], 'kat'), false);

//? Psuedocode:  check whether or not the value is includes() in the arr by passing in the argument of x

const assert = require('assert')

// const check = (a,x) => a.includes(x) 

function check(a, x) {
    return a.includes(x)
  }
console.log(check([66, 101], 66))

  assert.strictEqual(check([66, 101], 66), true);
  assert.strictEqual(check([101, 45, 75, 105, 99, 107], 107), true);
  assert.strictEqual(check(['t', 'e', 's', 't'], 'e'), true);
  assert.strictEqual(check(['what', 'a', 'great', 'kata'], 'kat'), false);