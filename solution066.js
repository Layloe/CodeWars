// The wide-mouth frog is particularly interested in the eating habits of other creatures.

// He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

// When he meets the alligator, it then makes a tiny mouth.

// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.

//Parameters: Takes one argument that is a string

//Return: Returns a case-insensitive string

//Example: 
    // assert.strictEqual(mouthSize("toucan"),"wide")
    // assert.strictEqual(mouthSize("ant bear"),"wide")
    // assert.strictEqual(mouthSize("alligator"),"small")

//Psuedocode:   Use if else to to check to check if string matches "alligator" to retrun a str 'small' else return 'wide'
const assert = require('assert')

function mouthSize(animal) {
    if (animal === "alligator") {
        return ('small')
    } else {
        return ('wide')
        
    }
  }

  mouthSize('alligator')


    assert.strictEqual(mouthSize("toucan"),"wide")
    assert.strictEqual(mouthSize("ant bear"),"wide")
    assert.strictEqual(mouthSize("alligator"),"small")

