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

//Parameters: A string containing a sequence of character sequences separated by commas.

//Return: A new string containing the same character sequences except the first and the last ones but this time separated by spaces.

//Exapmle:

// assert.strictEqual(array('1,2,3'), '2');
// assert.strictEqual(array('1,2,3,4'), '2 3');
// assert.strictEqual(array('1,2,3,4,5'), '2 3 4');
// assert.strictEqual(array(''), null);
// assert.strictEqual(array('1'), null);
// assert.strictEqual(array('1,2'), null);

//Psuedocode: Use if else to check length greater then 1,then use string methods split('') slice('') then join(' '). 

const assert = require('assert')

function array(arr){
    // if (arr.length < 1 ) { //? Went with if else but should've went with a || null
    //     return null
        
    // } else {

        return arr.split(',').slice(1,-1).join(' ') || null
    }
   
    
    

    array('1,2,3,4')


assert.strictEqual(array('1,2,3'), '2');
assert.strictEqual(array('1,2,3,4'), '2 3');
assert.strictEqual(array('1,2,3,4,5'), '2 3 4');
assert.strictEqual(array(''), null);
assert.strictEqual(array('1'), null);
assert.strictEqual(array('1,2'), null);
    