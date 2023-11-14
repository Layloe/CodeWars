// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

// Parameters: an arr that contains 3 integers

// Return: the index of medium integer

// Example:
// ([2, 3, 1]) => 0
// ([5, 10, 14]) => 1

// Psuedocode:
//  use sort() method --> 
// use indexOf() or mafs logic to find the medium -->
// then output the index of meduim

const gimme = arr => arr.indexOf([...arr].sort((a,b) => a-b)[1])

// function gimme (triplet) {
//     const test = triplet.sort((a,b) => a - b)
//     // const testIndex = triplet.filter((x,i) => x.Math.round())
    

//     return  test[1]
   
// }

console.log(gimme([-5.2, -10.6, 14]))