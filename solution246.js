// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example(Input --> Output):

// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]

//? Parameters: A number

//? Return: an array of numbers

//? Example:
// assert.deepEqual((monkeyCount(5)), [1, 2, 3, 4, 5]);
// assert.deepEqual((monkeyCount(3)), [1, 2, 3]);
// assert.deepEqual((monkeyCount(9)), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
// assert.deepEqual((monkeyCount(10)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// assert.deepEqual((monkeyCount(20)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

//? Pseudocode: create a mutable var []
//? for loop
//? count push( i *1)

const assert = require('assert')

function monkeyCount(n) {                                                                   //! added to Anki deck
    let count = []
    
    for (let i = 1; i <= n; ++i) {
        count.push(i * 1) 
    }
     return count
}
console.log(monkeyCount(5))

assert.strictEqual((monkeyCount(5)), [1, 2, 3, 4, 5]);  // works but test needs library installed to pass.
assert.strictEqual((monkeyCount(3)), [1, 2, 3]);
assert.strictEqual((monkeyCount(9)), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
assert.strictEqual((monkeyCount(10)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.strictEqual((monkeyCount(20)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
