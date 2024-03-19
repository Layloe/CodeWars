// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

//? Prameters: take in a number 

//? Return: a string based on the number

//? Example:
// assert.strictEqual(howMuchILoveYou(7),"I love you")
// assert.strictEqual(howMuchILoveYou(3),"a lot")
// assert.strictEqual(howMuchILoveYou(6),"not at all")

//? Psuedocode: create an variable to hold strings
//? figure out how to keep looping through arr once it reached it's length
//? use modulus

const assert = require('assert')

function howMuchILoveYou(nbPetals) {
    const strArr = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]
    const remainder = ( nbPetals -1) % strArr.length 

    return strArr[remainder]
     
 
}
console.log(howMuchILoveYou(7))

assert.strictEqual(howMuchILoveYou(7),"I love you")
assert.strictEqual(howMuchILoveYou(3),"a lot")
assert.strictEqual(howMuchILoveYou(6),"not at all")
