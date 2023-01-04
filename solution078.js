// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

//Parameters: An array with two parameters (a, x)

//Return: A boolean if a === x

//Example:
// assert.strictEqual(check([66, 101], 66), true);
// assert.strictEqual(check([101, 45, 75, 105, 99, 107], 107), true);
// assert.strictEqual(check(['t', 'e', 's', 't'], 'e'), true);
// assert.strictEqual(check(['what', 'a', 'great', 'kata'], 'kat'), false);

//Psuedocode: Use method includes() with if else. 

const assert = require('assert')


function check(a, x) {
    if (a.includes(x)) {
        return true
    } else {
        return false
    }
  }

  console.log(check([66, 101], 66))

  assert.strictEqual(check([66, 101], 66), true);
  assert.strictEqual(check([101, 45, 75, 105, 99, 107], 107), true);
  assert.strictEqual(check(['t', 'e', 's', 't'], 'e'), true);
  assert.strictEqual(check(['what', 'a', 'great', 'kata'], 'kat'), false);