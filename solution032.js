// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"

//Parameters: Return a string,if either text or char are empty return ""
//Returns: A replacement of the string with char and using it's length to replace the string.
//Examples: 
// Test.assertEquals(contamination("abc","z"), "zzz")
// Test.assertEquals(contamination("","z"), "")
// Test.assertEquals(contamination("abc",""), "")
// Test.assertEquals(contamination("_3ebzgh4","&"), "&&&&&&&&")
// Test.assertEquals(contamination("//case"," "), "      ")
//Psudocode: Find length of string, replace text.repeat() 

function contamination(text, char){
    console.log (char.repeat(text.length))
 }
    contamination("abc", "z")
     
