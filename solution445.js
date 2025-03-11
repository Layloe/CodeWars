// You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

// e.g. transposeTwoStrings(['Hello','World']);

// should return

// H W  
// e o  
// l r  
// l l  
// o d
// A few things to note:

// There should be one space in between the two characters
// You don't have to modify the case (i.e. no need to change to upper or lower)
// If one string is longer than the other, there should be a space where the character would be
function transposeTwoStrings (array) {
    let transposedArr = []
    for (let i = 0; i < array.length; i++) {
        transposedArr.push(`${[0]}` + `${[1]}`)
    }
	return transposedArr
}
console.log(transposeTwoStrings(['Hello', 'World']))
// Input will be an array that contains two strings
// Output will be a string that is transposed with each line containing one letter of each word in array
// Example is above 
// I think I will go with slice with /nl