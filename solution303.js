// Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

// The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

// Example:

// solution({a: 1, b: '2'}) should return "a = 1,b = 2"

//? Parameters: an object with multiple key value pairs.

//? Return: a string  that has 'key = value,key = value' for all the pairs

//? Example:
// solution({a: 1, b: '2'}) should return "a = 1,b = 2"

//? Pseudocode: var objToString = []
// for in
// push
// join

const assert = require('assert')

function solution(pairs){  //added to anki
    let objToString = []
    for (let key in pairs) {
        objToString.push(`${key} = ${pairs[key]}`)
    }

    return objToString.join(',')
  }
  console.log(solution({'a': 1, 'b': 2}))

  assert.strictEqual(solution({'a': 1, 'b': 2}), 'a = 1,b = 2')
  assert.strictEqual(solution({'a': 'b', 'b': 'a'}), 'a = b,b = a')
  assert.strictEqual(solution({0: 'a', 'b': 2}), '0 = a,b = 2')
  assert.strictEqual(solution({'b': 1, 'c': 2, 'e': 3}), 'b = 1,c = 2,e = 3')
  assert.strictEqual(solution({}), '')