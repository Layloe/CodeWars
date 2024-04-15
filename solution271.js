// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).


// If they are, change the array value to a string of that vowel.

// Return the resulting array.

//? Prameters: an array of nums 

//? Return: array of nums if nums = vowels change the array value to a string of that vowel.

//? Example:
// Test.assertSimilar(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]),[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]);
// Test.assertSimilar(isVow([101,121,110,113,113,103,121,121,101,107,103]),["e",121,110,113,113,103,121,121,"e",107,103]);

//? Psuedocode: create a variable that changes nums into charCodes.
//? map through char includes(vowel)
//? change array to letters and if it includes the vowel change it to the char

function isVow(a){
    
    const letters = a.map(item => (item  == 101 || item == 117 || item  == 97 || item  == 105 || item  == 111) ? String.fromCharCode(item ) : item )
    // const test = letters.filter(item => 'aeiuo'.includes(item) )


    return letters

}
console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]))

// Test.assertSimilar(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]),[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]);
// Test.assertSimilar(isVow([101,121,110,113,113,103,121,121,101,107,103]),["e",121,110,113,113,103,121,121,"e",107,103]);