// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
const assert = require('assert')
function feast(beast, dish) {
    const tonightWeDineInHell = beast.charAt(0) + beast.slice(-1)
    const foodServedInHell = dish.charAt(0) + dish.slice(-1)

    return tonightWeDineInHell.includes(foodServedInHell)
    }
    console.log(feast("great blue heron", "garlic naan"))
    //input is going to be a string of lowercase letters and will never be < 2 length
    //output will be a boolean
    //.assertEquals(feast("great blue heron", "garlic naan"), true)
    // conditionals with the methods startsWith and endsWith. went with a longer way of solving with charAt, slice and includes
    assert.strictEqual(feast("great blue heron", "garlic naan"), true)
    assert.strictEqual(feast("chickadee", "chocolate cake"), true)
    assert.strictEqual(feast("brown bear", "bear claw"), false)