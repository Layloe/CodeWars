// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//Parameters: A string that removes exclamation marks.

//Return:A string with the exclamation marks removed

//Example:
// assert.strictEqual(removeExclamationMarks("Hello World!"), "Hello World");
// Testing for s = "xWtWxEYtoJ!bwRLgbBjZo NppkBkolQB!PADFnkAevj": expected 'xWtWxEYtoJ bwRLgbBjZo NppkBkolQB!PADFnkAevj' to equal 'xWtWxEYtoJbwRLgbBjZo NppkBkolQBPADFnkAevj'

//Psuedocode: One way is to use string method replaceAll('!','')

function removeExclamationMarks(s) {

    // let str = []

    console.log(s.replaceAll('!',''))
   

  }

  removeExclamationMarks("xWtWxEYtoJ!bwRLgbBjZo NppkBkolQB!PADFnkAevj")
