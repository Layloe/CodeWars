// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"

//? Prameters: an array of strings

//? Return: one of two strings depending on the location of wolf

//? Example:
// assert.strictEqual(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"],
// "Oi! Sheep number 2! You are about to be eaten by a wolf!"
// );
// assert.strictEqual(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"],
// "Oi! Sheep number 5! You are about to be eaten by a wolf!"
// );
// assert.strictEqual(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"],
// "Oi! Sheep number 6! You are about to be eaten by a wolf!"
// );
// assert.strictEqual(["sheep", "wolf", "sheep"],
// "Oi! Sheep number 1! You are about to be eaten by a wolf!")

//? Psuedocode: declare a var
//? reverse()
//? fin the postion of wolf
//? condtionals for strings
//? templete literals

const assert = require('assert')


function warnTheSheep(queue) {
    const findWolf = queue.reverse().indexOf('wolf')   
    if (findWolf == 0){
        return "Pls go away and stop eating my sheep"
    } else {
        return `Oi! Sheep number ${findWolf}! You are about to be eaten by a wolf!`
    }

}
console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "sheep", "wolf" ]))

assert.strictEqual(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]),
"Oi! Sheep number 2! You are about to be eaten by a wolf!")
assert.strictEqual(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep", "wolf"]),
"Pls go away and stop eating my sheep")
// );
// assert.strictEqual(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"],
// "Oi! Sheep number 5! You are about to be eaten by a wolf!"
// );
// assert.strictEqual(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"],
// "Oi! Sheep number 6! You are about to be eaten by a wolf!"
// );
// assert.strictEqual(["sheep", "wolf", "sheep"],
// "Oi! Sheep number 1! You are about to be eaten by a wolf!")


// function findMultiples(integer, limit) {
//     const arr = []
 
//     for (let i = integer; i >= limit; integer += ) {
//       arr.push(i)
//     }
//     let i = integer; // i = 5
// if (i <= limit) {
//   arr.push(i)
// }
// i += integer;
// console.log(i);

// if (i <= limit) {
//   arr.push(i)
// }
// i += integer;
// console.log(i);

// if (i <= limit) {
//   arr.push(i)
// }
// i += integer;
// console.log(i);

// if (i <= limit) {
//   arr.push(i)
// }
// i += integer;
// console.log(i);

// if (i <= limit) {
//   arr.push(i)
// }
// i += integer;
// console.log(i);

//     return arr

// console.log(findMultiples(5,25))