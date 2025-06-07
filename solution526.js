// Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

// The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

// Example:

// solution({a: 1, b: '2'}) // should return "a = 1,b = 2"

function solution(pairs){
  return Object.keys(pairs)
}
console.log(solution({'a': 1, 'b': 2}))
// Input is an object containing mutable key value pairs.
// Output is a string containing key value pairs separated '='
    // assert.strictEqual(solution({'a': 1, 'b': 2}), 'a = 1,b = 2')
    // assert.strictEqual(solution({'a': 'b', 'b': 'a'}), 'a = b,b = a')
    // assert.strictEqual(solution({0: 'a', 'b': 2}), '0 = a,b = 2')
    // assert.strictEqual(solution({'b': 1, 'c': 2, 'e': 3}), 'b = 1,c = 2,e = 3')
    // assert.strictEqual(solution({}), '')
// Split with the delimiter ','