// The wide-mouth frog is particularly interested in the eating habits of other creatures.

// He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

// When he meets the alligator, it then makes a tiny mouth.

// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.

//? Parameters: a string

//? Return: a string dependent on the argument 'wide' or 'small

//? Example:
//   assert.strictEqual(mouthSize("toucan"),"wide")
//   assert.strictEqual(mouthSize("ant bear"),"wide")
//   assert.strictEqual(mouthSize("alligator"),"small")

//? Psuedocode: condtionals

const assert = require('assert')

// const mouthSize = animal => animal == "alligator" ? "small" : "wide"

function mouthSize(animal) {
    return animal == "alligator" ? "small" : "wide"
  }
console.log(mouthSize("toucan"))

  assert.strictEqual(mouthSize("toucan"),"wide")
  assert.strictEqual(mouthSize("ant bear"),"wide")
  assert.strictEqual(mouthSize("alligator"),"small")