// This function should return an object, but it's not doing what's intended. What's wrong?

//? Parameters: none

//? Return: obj

//? Example:
// Test.assertDeepEquals(mystery(), {sanity: 'Hello'}, 'Mystery has not returned to sanity');

//? Pseudocode: debug function

const assert = require('assert')

// const mystery = () => ({sanity: 'Hello'})

function mystery() {
    var results = {sanity: 'Hello'};
      
    return results;
      
  }
  console.log(mystery())

  assert.strictEqual(mystery(), {sanity: 'Hello'}, 'Mystery has not returned to sanity');