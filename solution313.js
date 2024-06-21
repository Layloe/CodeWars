// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?

//? Parameters: a string: a name 

//? Return: one of two strings 

//? Example:
// Test.assertEquals(greet("Jim"), "Hello, Jim!")

//? Pseudocode: debug
// if else
// conditionals 

const assert = require('assert')

function greet(name){

    if(name === "Johnny")
        return "Hello, my love!"
    else {
        return "Hello, " + name + "!";
    }    
  }
  console.log(greet("Johnny5"))

  assert.strictEqual (greet("Jim"), "Hello, Jim!");
  assert.strictEqual(greet("Jane"), "Hello, Jane!");
  assert.strictEqual(greet("Simon"), "Hello, Simon!");