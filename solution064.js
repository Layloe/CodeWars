// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

//Parameters: A string which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

//Return: A string 

//Exapmle:
    // Test.assertSimilar(getNumberFromString("1"), 1);
    // Test.assertSimilar(getNumberFromString("123"), 123);
    // Test.assertSimilar(getNumberFromString("this is number: 7"), 7);



//Psuedocode: USe methods split('').filter(s =>) , includes(s). join('')

// const assert = require('assert')


function getNumberFromString(s) {
//    let nums = "1234567890"
    
    return parseInt(s.split('').filter(s => '1234567890' .includes(s)).join('')) 

  }

  getNumberFromString('this is number: 7')

  //! Tried fixing assert ¯\_ (ツ)_/¯

//   assert.strictEqual(getNumberFromString("1"), 1);
//   assert.strictEqual(getNumberFromString("123"), 123);
//   assert.strictEqual(getNumberFromString("this is number: 7"), 7);