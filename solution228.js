// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

//? Prameters: numbers

//? Return: an array of the same nubers but in reverse order

//? Example:
// assert.strictEqual(digitize(35231),[1,3,2,5,3]);
// assert.strictEqual(digitize(0),[0]);

//? Psuedocode: declare a var
//? split('')
//? Number
//? reverse()

const assert = require('assert')



function digitize(n) {
    const arr = String(n).split('').reverse()
    return arr.map(item => Number(item))
}
  console.log(digitize(35231))

  assert.deepStrictEqual(digitize(35231),[1,3,2,5,3]);
  assert.deepStrictEqual(digitize(0),[0]);