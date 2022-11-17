// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//Parameters: A string that removes exclamation marks.

//Return:A string with the exclamation marks removed

//Example:
// assert.strictEqual(removeExclamationMarks("Hello World!"), "Hello World");
// Testing for s = "xWtWxEYtoJ!bwRLgbBjZo NppkBkolQB!PADFnkAevj": expected 'xWtWxEYtoJ bwRLgbBjZo NppkBkolQB!PADFnkAevj' to equal 'xWtWxEYtoJbwRLgbBjZo NppkBkolQBPADFnkAevj'

//Psuedocode: One way to solve this, use string method replaceAll('!','')

// function removeExclamationMarks(s) {

    // let str = []

    // console.log(s.replaceAll('!',''))
    const assert = require ('assert')

    function removeExclamationMarks(s) {
      const split = s.split('!')
      console.log(split)
      return s.split('!').join('');
      console.log()

    }
   

  

  removeExclamationMarks("xWtWxEYtoJ!bwRLgbBjZo NppkBkolQB!PADFnkAevj")

  assert.strictEqual(removeExclamationMarks("Hello World!"), "Hello World");
  assert.strictEqual(removeExclamationMarks("xWtWxEYtoJ!bwRLgbBjZo NppkBkolQB!PADFnkAevj"), 'xWtWxEYtoJbwRLgbBjZo NppkBkolQBPADFnkAevj'); 