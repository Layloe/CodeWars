// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

//Parameters: Take in an array that contains strings

//Return: A str that is associated with the iteration number count

//Example:
// assert.strictEqual(howMuchILoveYou(7),"I love you")
// assert.strictEqual(howMuchILoveYou(3),"a lot")
// assert.strictEqual(howMuchILoveYou(6),"not at all")

//Pseudocode: ITerate through loop find index and add math since rhe itterating has to reloop


function howMuchILoveYou(nbPetals) {

let petals = ["I love you","a little","a lot","passionately","madly","not at all"]

    // for (let i= 0; i < nbPetals; i++) {
    //     const element = i % petals.length //Modulos operator is used to ensure that the index stays withing the bounds of the arr
    //     return (petals[element])
        
    // }
    return petals[(nbPetals - 1) % petals.length]
}
    // petals.filter((value, index) => {
    // console.log(value, index)
//     merge.indexOf(value) === index

//     })
// }
console.log(howMuchILoveYou(3))

    // petals.filter((value, index) => petals.indexOf(value) === index)
// console.log(index)


// assert.strictEqual(howMuchILoveYou(7),"I love you")
// assert.strictEqual(howMuchILoveYou(3),"a lot")
// assert.strictEqual(howMuchILoveYou(6),"not at all")