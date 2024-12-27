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

//? Parameters: Take in an array that is sorted desc

//? Return: A one of two strings "Oi! Sheep number 1! You are about to be eaten by a wolf!" or "Pls go away and stop eating my sheep"

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
// "Oi! Sheep number 1! You are about to be eaten by a wolf!"
// );
// assert.strictEqual(["wolf"],
// "Pls go away and stop eating my sheep"
// );
// assert.strictEqual(["sheep", "sheep", "wolf"],
// "Pls go away and stop eating my sheep"

//? Psuedocode: Going to use method reverse and filter then do and if else to use the right str

// (cond ? a : b)
function warnTheSheep(queue) {
    
     outlier = queue.reverse()
    

     if (outlier.includes('wolf') && outlier.indexOf('wolf') == 0) {
        return "Pls go away and stop eating my sheep"
     } else if(outlier.includes('wolf')) {
        outlier.filter((value, index) => outlier.indexOf(value) === index)
        return `Oi! Sheep number ${outlier.indexOf('wolf')-1}! You are about to be eaten by a wolf!`
     }

    // ( outlier) ? queue.findLastIndex(wolf => wolf.outlier) === 'wolf' : "Pls go away and stop eating my sheep"
    // if (outier = true) {
    //     queue.indexOf('wolf')
    //     console.log()
        // return "Pls go away and stop eating my sheep"
        // queue.filter(value,index => value.outlier == 'wolf')
        // console.log(queue.indexOf('wolf')-1)
    // } else {
        // queue.indexOf('wolf')
    // }

    // return outlier
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep" , "sheep","wolf" ]))