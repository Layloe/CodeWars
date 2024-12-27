// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

//Parameters: an arr with 3 nums

//Return: the index of the numerical element that lies between the other two elements

//Example:
	// assert.strictEqual([2, 3, 1], 0);
	// assert.strictEqual([5, 10, 14], 1)
    // assert.strictEqual([2.1, 3.2, 1.4], 0);
    // assert.strictEqual([5.9, 10.4, 14.2], 1)
    // assert.strictEqual([-2, -3, -1], 0);
    // assert.strictEqual([-5, -10, -14], 1)
    // assert.strictEqual([-2, -3.2, 1], 0);
    // assert.strictEqual([-5.2, -10.6, 14], 0)

//Psuedocode: use methods  filter, sort() in asc and find index of middle num and compare
//loop thru array then compare 


function gimme (triplet) {

    // const mid = triplet.sort((a, b) => a - b )
    // const index = triplet.indexOf( mid[1])
    const tripletCopy = triplet.slice()

    tripletCopy.sort((a, b) => a - b)
    
    const middleIndex = triplet.indexOf(tripletCopy[1])

    return middleIndex 


}

console.log(gimme([2, 3, 1]))