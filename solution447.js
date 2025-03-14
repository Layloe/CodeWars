// Given a string and an array of indices, rearrange the characters of the string so that each character is placed at the position specified by the corresponding index in the array.

// Examples
// Input: 'abcd', [0, 3, 1, 2]

// Output: 'acdb'

// Explanation:

// The character 'a' is placed at index 0.

// The character 'b' is placed at index 3.

// The character 'c' is placed at index 1.

// The character 'd' is placed at index 2.

// Notes
// The string and the array will always be of equal length.

// Both the string and the array will contain valid characters (A-Z, a-z, or 0-9).
const assert = require('assert')

function scramble(str, arr) {
    const arrHold = []
    for (let i = 0; i < arr.length;i++) {
        arrHold[arr[i]] = str[i]
    }
    // const test = str.split('').forEach((item, index) => {
    //     arrHold.push((arr[index] + item ))
    // })
    return arrHold.join('')
    // return arrHold.sort().map(item => item.slice(1)).join('')
  };
  console.log(scramble('sc301s', [4,0,3,1,5,2]))
// input will contain two params, first param will be a string of random chars and the second will contain an array of numbers/index locations
// output will be a string of rearranged chars
    // assert.strictEqual(('abcd', [0,3,1,2]), 'acdb')
    // assert.strictEqual('sc301s', [4,0,3,1,5,2]), "c0s3s1";
    // assert.strictEqual('bskl5', [2,1,4,3,0]), "5sblk";
// I will use for loop with index to find order