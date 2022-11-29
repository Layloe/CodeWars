// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"

//Paramaters: A string with or without exclamations marks.  

//Return: A string that checks if and exlimation mark is at the end of a string if true removes an exclamation mark from the end of a string

//Example:
        // doTest("Hi!", "Hi");
		// doTest("Hi!!!", "Hi!!");
		// doTest("!Hi", "!Hi");
		// doTest("!Hi!", "!Hi");
		// doTest("Hi! Hi!", "Hi! Hi");
		// doTest("Hi", "Hi");

//Psuedocode: Use endsWith('!') to check if exlimation mark is at the end of a string. If true use slice(-1)


//! Couldn't get the assert to work on this one

// const strictEqual = require("chai").assert.strictEqual;

// function doTest(input, expected) {
// 	const actual = remove(input);
// 	strictEqual(actual, expected, `for string:\n"${input}"\n`);
// }


function remove (string) {
    
   if (string.endsWith('!')) {

        return string.slice(0,-1)
        
   }else {

    return string
   }
    
  }

  remove('Hi')
        // doTest("Hi!", "Hi");
		// doTest("Hi!!!", "Hi!!");
		// doTest("!Hi", "!Hi");
		// doTest("!Hi!", "!Hi");
		// doTest("Hi! Hi!", "Hi! Hi");
		// doTest("Hi", "Hi");