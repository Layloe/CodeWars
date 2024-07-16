// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

// Examples:

// 1: -1
// 14: -14
// -34: 34

//? Parameters: a num

//? Return: opposite num example: 33.33 -> -33.33

//? Example:
// assert.strictEqual(opposite(3.3333333), -3.3333333)

//? Pseudocode: create var Math.abs(), ifelse <>

const assert = require('assert')

// const opposite = number => -number

function opposite(number) {
    const numConvert = Math.abs(number)
    if (number > 0) {
        return -numConvert 
    }
    if (number < 0) {
        return +numConvert
    }
    return numConvert
  }
console.log(opposite(3.3333333))

  assert.strictEqual(opposite(1), -1)
  assert.strictEqual(opposite(0), 0)
  assert.strictEqual(opposite(4.25), -4.25)
  assert.strictEqual(opposite(3.3333333), -3.3333333)

