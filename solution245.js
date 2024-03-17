// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

//? Prameters: an arry with mixed data types

//? Return: an array and remove every second element from the array

//? Example:
// assert.deepEqual(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
// assert.deepEqual(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
// assert.deepEqual(removeEveryOther([[1, 2]]), [[1, 2]]);
// assert.deepEqual(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);

//? Psuedocode: declare var
//? fitler(item,index)
//? index % 2 == 0

const assert = require('assert')

// const removeEveryOther = arr => arr.filter((item,index) => index % 2 === 0)

function removeEveryOther(arr){
    const cutIndexEqual2 = arr.filter((item, index) =>  index % 2  == 0 )
    return cutIndexEqual2
  }
console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))

assert.strictEqual(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
assert.strictEqual(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
assert.strictEqual(removeEveryOther([[1, 2]]), [[1, 2]]);
assert.strictEqual(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);