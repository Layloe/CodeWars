// Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.

// To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number().

//Parameters: Compare two values, one will be a number and one will be a string

//Return: True if they are the same character (regardless of their different data types) and return false if they are not.

//Example:
//  Test.assertEquals(add('1', 1), true);
//  Test.assertEquals(add(1, '1'), true);
//  Test.assertEquals(add(1, '0'), false);
//  Test.assertEquals(add('11', 11), true);
//  Test.assertEquals(add(12, 12), true);
//  Test.assertEquals(add(120, '021'), false);

//Psuedocode: Use == to compare values

const assert = require('assert')






function add(a, b){
	return (a == b)
}

add('1', 1)

// assert.strictEquals(add('1', 1), true);
// assert.assertEquals(add(1, '1'), true);
// assert.assertEquals(add(1, '0'), false);
// assert.assertEquals(add('11', 11), true);
// assert.assertEquals(add(12, 12), true);
// assert.assertEquals(add(120, '021'), false);