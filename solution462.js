// Oh no!
// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.
const toNumberArray = strArr => strArr.map(Number)
// function toNumberArray(stringarray){
//     return stringarray.map(Number)
// }
console.log(toNumberArray(["1.1","2.2","3.3"]))
// Input will contain an array of strings 
// Output is going to be an array if nums
// assert.sameOrderedMembers(toNumberArray(["1.1","2.2","3.3"]), [1.1,2.2,3.3]);
// Use map with Number