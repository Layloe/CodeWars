// Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.

// const { it } = require("node:test")

// If your language can handle float binaries assume the array won't contain float or doubles.

// arr2bin([1,2]) == '11'
// arr2bin([1,2,'a']) == '11'
// arr2bin([]) == '0'

// NOTE: NaN is a number too in javascript for decimal, binary and n-ary base
// This is a modification on the Kata: Array2Binary addition hope you like it

//? Prameters: an array of diffrent data types

//? Return: an array that adds all the number elements then changes that sum to the binary equivalent of that sum

//? Example:
// assert.strictEqual(actual, "11")
// assert.strictEqual(arr2bin([1,2,3,4,5]), "1111")
// assert.strictEqual(arr2bin([1,10,100,1000]), "10001010111")
// assert.strictEqual(arr2bin([null]), "0")
// assert.strictEqual(arr2bin([true,true,false,15]),"1111")

//? Psuedocode: condtionls with 'typeof'
//? reduce() get sum
//? transform sum to binary 
//? fix edge cases

const assert = require('assert')

function arr2bin(arr){

  const sumTest = arr
    .reduce((sum, curr) => typeof(curr) === 'number' ? sum + curr : sum, 0)
    .toString(2)
    
    return sumTest
  }
console.log(arr2bin([1,10,100,1000]))

  // assert.strictEqual(actual, "11")
  assert.strictEqual(arr2bin([1,2,3,4,5]), "1111")
  assert.strictEqual(arr2bin([1,10,100,1000]), "10001010111")
  assert.strictEqual(arr2bin([null]), "0")
  assert.strictEqual(arr2bin([true,true,false,15]),"1111")
