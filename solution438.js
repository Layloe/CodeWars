// You will be given an array of numbers.

// For each number in the array you will need to create an object.

// The object key will be the number, as a string. The value will be the corresponding character code, as a string.

// Return an array of the resulting objects.

// All inputs will be arrays of numbers. All character codes are valid lower case letters. The input array will not be empty.
const assert = require('assert')

function numObj(s){
  let objCharCode = {}
  for (currItem of s) {
    if (objCharCode[currItem]) {
        {objCharCode[currItem]++ }
    }else {
        objCharCode[currItem] = String.fromCharCode(currItem)
    }
  }
  return [objCharCode]
}
console.log(numObj([118,117,120]))
// input will be an array of numbers
// output is an object that contains string of a number as a key and the ascii char as a value
    assert.deepEqual(numObj([118,117,120]),[{'118':'v'}, {'117':'u'}, {'120':'x'}]);
    assert.deepEqual(numObj([101,121,110,113,113,103]),[{'101':'e'}, {'121':'y'}, {'110':'n'}, {'113':'q'}, {'113':'q'}, {'103':'g'}]);
// declare a var that will hold an empty obj then use for of loop to check if item is in obj, if not add then add. If it is use String.fromCharCode method to get the letter