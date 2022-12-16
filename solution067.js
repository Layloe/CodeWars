// This Kata is intended as a small challenge for my students

// All Star Code Challenge #18

// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Notes:

// The first argument can be an empty string
// The second string argument will always be of length 1

//Parameters: Accepts 2 string arguments

//Return: Returns an integer of the count of occurrences the 2nd argument is found in the first one

//Example:
    // assert.strictEqual(strCount('Hello', 'o'), 1);
    // assert.strictEqual(strCount('Hello', 'l'), 2);
    // assert.strictEqual(strCount('',      'z'), 0);

//Psuedocode: Went a few diffrent directions with this(practice)

// const assert = require('assert')


function strCount(str, letter){  
        // return (str
         return (str.split('').filter(str => letter.includes(str)).join('').length)

        // let splt = str.split('')
        // console.log(splt)
        // let callback = str =>  letter.includes(str)
        // console.log(callback)
        // let filtr = splt.filter(callback)
        // console.log(filtr)
        // let joined = filtr.join('')
        // console.log(joined)
        // let result = joined.length 
        // console.log(result)
    
    }
    // console.log(str.includes(letter))
  
strCount('Hello', 'l')
    // assert.strictEqual(strCount('Hello', 'o'), 1);
    // assert.strictEqual(strCount('Hello', 'l'), 2);
    // assert.strictEqual(strCount('',      'z'), 0);