// Oh no!
// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.

//? Parameters: an arr of strings

//? Return: an arr of nums

//? Example:
// assert.sameOrderedMembers(toNumberArray(["1.1","2.2","3.3"]), [1.1,2.2,3.3]);

// ? Psuedocode: spit then join push or add to empty arr 
//! scratch that it was map and parseFloat

function toNumberArray(stringarray){
    
    return stringarray.map(parseFloat)

}

console.log(toNumberArray(["1.1","2.2","3.3"]))

