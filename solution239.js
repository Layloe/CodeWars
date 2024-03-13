// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

//? Prameters: two params a = an array of mixed data types and x = a value of diffrent data types

//? Return: a boolean if a contains x

//? Example:
// assert.strictEqual(check([66, 101], 66), true);
// assert.strictEqual(check([101, 45, 75, 105, 99, 107], 107), true);
// assert.strictEqual(check(['t', 'e', 's', 't'], 'e'), true);
// assert.strictEqual(check(['what', 'a', 'great', 'kata'], 'kat'), false);

//? Psuedocode: 
//?  includes()

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