// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

//? Parameters: takes in a string

//? Return: a string that swaps index's

//? Example:
// assert.strictEqual(nameShuffler('john McClane'),'McClane john');
// assert.strictEqual(nameShuffler('Mary jeggins'),'jeggins Mary')
// assert.strictEqual(nameShuffler('tom jerry'),'jerry tom')

//? Psuedocode:
//? split(' ') by space
//? reverse()
//? .join(' ') w/ space

const assert = require('assert')

// const nameShuffler = str => str.split(' ').reverse().join(' ')

function nameShuffler(str){
    return str.split(' ').reverse().join(' ')
  }
console.log(nameShuffler('john McClane'))

  assert.strictEqual(nameShuffler('john McClane'),'McClane john');
  assert.strictEqual(nameShuffler('Mary jeggins'),'jeggins Mary')
  assert.strictEqual(nameShuffler('tom jerry'),'jerry tom')