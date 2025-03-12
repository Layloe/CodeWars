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
    var len = Math.max(array[0].length, array[1].length)
    console.log(len)
    for (let i = 0; i < len; i++) {
        const column = (array[0][i] || '')+ " " + (array[1][i] || '')
        transposedArr.push(column)
    }

	return transposedArr.join('\n')
}
console.log(transposeTwoStrings(['Hello', 'World']))
// Input will be an array that contains two strings
// Output will be a string that is transposed with each line containing one letter of each word in array
// Example is above 
// I think I will go with slice with /nl.Nope, didn't know and studied solutions