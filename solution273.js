// The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

// Task: Given an array of Player objects and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

// Example:

// duck_duck_goose([a, b, c, d], 1) should return a.name
// duck_duck_goose([a, b, c, d], 5) should return a.name
// duck_duck_goose([a, b, c, d], 4) should return d.name
// // PHP only
// duck_duck_goose([$a, $b, $c, $d], 1); // => $a["name"]
// duck_duck_goose([$a, $b, $c, $d], 5); // => $a["name"]
// duck_duck_goose([$a, $b, $c, $d], 4); // => $d["name"]

//? Prameters: two params players: an arr of ten letters/chars and goose: a number 

//? Return: a char/letter(string) that index of a string inside the array.

//? Example:
// assert.strictEqual(duckDuckGoose(players, 1),  "a");
// assert.strictEqual(duckDuckGoose(players, 3),  "c");
// assert.strictEqual(duckDuckGoose(players, 10), "z");
// assert.strictEqual(duckDuckGoose(players, 20), "z");
// assert.strictEqual(duckDuckGoose(players, 30), "z");
// assert.strictEqual(duckDuckGoose(players, 18), "g");
// assert.strictEqual(duckDuckGoose(players, 28), "g");
// assert.strictEqual(duckDuckGoose(players, 12), "b");
// assert.strictEqual(duckDuckGoose(players, 2),  "b");
// assert.strictEqual(duckDuckGoose(players, 7),  "f");

//? Pseudocode: create a loop that repeats once it gets to the end of the arr.
//? declare a var
//? possible solution using % == 10
//? slice()
const assert = require('assert')

function duckDuckGoose(players, goose) {  //Needs codewars to run

  return players[(goose-1)%players.length].name
  }
// console.log(duckDuckGoose(players, 20))

assert.strictEqual(duckDuckGoose(players, 1),  "a");
assert.strictEqual(duckDuckGoose(players, 3),  "c");
assert.strictEqual(duckDuckGoose(players, 10), "z");
assert.strictEqual(duckDuckGoose(players, 20), "z");
assert.strictEqual(duckDuckGoose(players, 30), "z");
assert.strictEqual(duckDuckGoose(players, 18), "g");
assert.strictEqual(duckDuckGoose(players, 28), "g");
assert.strictEqual(duckDuckGoose(players, 12), "b");
assert.strictEqual(duckDuckGoose(players, 2),  "b");
assert.strictEqual(duckDuckGoose(players, 7),  "f");