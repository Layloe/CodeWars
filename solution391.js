// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'
const assert = require('assert')

function greet (name, owner) {
    if (name == owner) {
        return'Hello boss'
    } else {
        return 'Hello guest'
    }
  }
  console.log(greet('Greg', 'Daniel'))
  assert.strictEqual(greet('Daniel', 'Daniel'), 'Hello boss')
  assert.strictEqual(greet('Greg', 'Daniel'), 'Hello guest')
  //input will be two parameters each containing a name/str
  //output will be one of two strings
  //use if else to compare both strings


//   Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
function removeExclamationMarks(s) {
    return s.split('!').join('');
  }
  console.log(removeExclamationMarks("Hello World!"))
  //input will be a string that will have an exclamation mark
  //output will be a string without any exclamation marks
  //("Hello World!"), "Hello World")
  //use a split with ! as the delimiter then join  
  assert.strictEqual(removeExclamationMarks("Hello World!"), "Hello World");