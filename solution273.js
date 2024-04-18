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

//? Prameters: two params players: an arr of chars and goose: a number 

//? Return: a char that is a str

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

//? Psuedocode: delcare a var
//? slice()

function duckDuckGoose(players, goose) {
    let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"]
    
    return players.indexOf(goose)
  }
console.log(duckDuckGoose([a, b, c, d], 1))

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