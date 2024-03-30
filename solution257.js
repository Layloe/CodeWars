// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"

// Note: if this seems too simple for you try the next level

// Note2: the input data can be: boolean array, array of objects, array of string arrays, array of number arrays... 

//? Prameters: an array of diffrent data types

//? Return: array without "" on each value

//? Example:
// ["h","o","l","a"]

//? Psuedocode: .join(',')

function printArray(array){
    return array.join(',')
  }
  console.log(printArray(["h","o","l","a"]))

//   const Test = require('@codewars/test-compat');

//   describe("Tests", () => {
//     it("test", () => {
//   var data = [2,4,5,2];
//   Test.expect( printArray( data ) ==
//     "2,4,5,2", "int test failed" )
//     });
//   });
  