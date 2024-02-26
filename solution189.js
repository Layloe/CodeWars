// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.


//? Parameters: two paramters both strings

//? Return: a boolean if string starts with and end with matching chars of the second string

//? Example:
// Test.assertEquals(feast("great blue heron", "garlic naan"), true)
// Test.assertEquals(feast("chickadee", "chocolate cake"), true)
// Test.assertEquals(feast("brown bear", "bear claw"), false)

//? Psuedocode: need to practice this kata again 
//? use condtionals if
//? use methods endWith('') startsWith('') 
//? return boolean

const assert = require('assert')

function feast(beast, dish) {
    const charFirstBeast = beast[0]
    const charLastBeast = beast.slice(-1)
    const charFirstDish = dish[0]
    const charLastDish = dish.slice(-1)
    
    if(charFirstBeast === charFirstDish  && charLastBeast === charLastDish ){
        return true
    }else {
        return false
    }
}
console.log(feast("great blue heron", "garlic naan"))

assert.strictEqual(feast("great blue heron", "garlic naan"), true)
assert.strictEqual(feast("chickadee", "chocolate cake"), true)
assert.strictEqual(feast("brown bear", "bear claw"), false)