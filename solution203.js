// This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL

//? Prameters: take a string

//? Return: return a string without replace comas with spaces if empty string return null 

//? Example:
// test('', null);
// test('1', null);
// test('A1,B2', null);
// test('1,2,3', '2');
// test('1,2,3,4', '2 3');
// test('A1,B2,C3,D4,E5', 'B2 C3 D4');
// test('A,1,23,456,78,9,Z', '1 23 456 78 9');

//? Psuedocode: split(',')
//? .slice(1,-1)
//? conditionals for null
//? .join(' ')

const assert = require('assert')

function array(string) {
    const sliceStr = string.split(',').slice(1,-1).join(' ')

    return sliceStr == '' ? null : sliceStr
  }
  console.log(array('1,2,3'))
  
  assert.strictEqual(array(''), null);
  assert.strictEqual(array('1'), null);
  assert.strictEqual(array('A1,B2'), null);
  assert.strictEqual(array('1,2,3'), '2');
  assert.strictEqual(array('1,2,3,4'), '2 3');
 
