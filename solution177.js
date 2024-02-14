// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

//? Parameters: takes in a string in the form of a name

//? Return: a strings dependent on a boolean

//? Example:
// assert.strictEqual(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
// assert.strictEqual(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
// assert.strictEqual(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
// assert.strictEqual(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
// assert.strictEqual(areYouPlayingBanjo("rolf"), "rolf plays banjo");

//? Psuedocode: use method charAt(0) and if else conditonal with templete literals

const assert = require('assert')

// const areYouPlayingBanjo = name => name.charAt(0) === 'R' || name.charAt(0) === 'r' ?  `${name} plays banjo`: `${name} does not play banjo`

function areYouPlayingBanjo(name) {
    if (name.charAt(0) === 'R' || name.charAt(0) === 'r') {
        return `${name} plays banjo`
    } else {
        return `${name} does not play banjo`
    }
  }
console.log(areYouPlayingBanjo("Ringo"))

  assert.strictEqual(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
  assert.strictEqual(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
  assert.strictEqual(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
  assert.strictEqual(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
  assert.strictEqual(areYouPlayingBanjo("rolf"), "rolf plays banjo");