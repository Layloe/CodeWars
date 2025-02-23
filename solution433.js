// You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D

// Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.

// You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). If there are no bags then you can't pick anything up, so you can ignore cap.

// You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.

// If you do, return 'Clean', else return 'Cr@p'.

// Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.

// For example:

// bags = 2
// cap = 2
// x (or garden) =
// [[ _ , _ , _ , _ , _ , _ ],
//  [ _ , _ , _ , _ , @ , _ ],
//  [ @ , _ , _ , _ , _ , _ ]]
// returns 'Clean'
const assert = require('assert')
function crap(x, bags, cap){
    let poop = 0
    const flattenArray = x.flat()
    for (currItem of flattenArray) {
        if (currItem == 'D') {
            return 'Dog!!'
        }
        if (currItem == '@') {
            poop++
        }
        if (bags == 0) {
            return "Cr@p"
        }
    }

    return bags < poop ? 'Cr@p' : 'Clean'
}
console.log(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 1, 1))

// input will be nested arrays containing string chars
// output will be one of three options depending on the outcome of conditionals: 
// 'Clean', 'Cr@p', or 'Dog!!'
assert.strictEqual(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 2, 2), "Clean");
assert.strictEqual(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 1, 1), "Cr@p");
assert.strictEqual(crap([['_','_'], ['_','@'], ['D','_']], 2, 2), "Dog!!");
// declare a couple vars that will hold counts of poop or bags. Use a for loop to find counts. Use conditionals to find the count of