// You will be given a string featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'. The string will start with the cat, and end with the mouse.

// You need to find out if the cat can catch the mouse from its current position. The cat can jump over at most three characters. So:

// "C.....m" returns "Escaped!" <-- more than three characters between

// "C...m" returns "Caught!" <-- as there are three characters between the two, the cat can jump.
const assert = require('assert')

const catMouse = x => [...x].slice(1,-1).length <= 3 ? "Caught!" : "Escaped!"

// function catMouse(x){
//     if ([...x].slice(1, -1).length <= 3) {        
//         return "Caught!"
//     } 

//     return "Escaped!"
// }
console.log(catMouse("C...m"))
// Input will be a string always containing the upper 'C' at index 0 and lower 'm' at index -1
// Output will be one of two strings "Escaped!" or "Caught!"
    assert.strictEqual(catMouse('C....m'), "Escaped!");
    assert.strictEqual(catMouse('C..m'), "Caught!");
    assert.strictEqual(catMouse('C.....m'), "Escaped!");
// Spread operator and use conditionals to find length of center of string
