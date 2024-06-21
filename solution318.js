// If/else syntax debug
// While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.

// checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.

// The function receives one parameter health which will always be a whole number between -10 and 10.

//? Parameters: a number between -10 and 10

//? Return: a boolean depending on ifelse

//? Example:
// Test.assertEquals(checkAlive(5), true)
// Test.assertEquals(checkAlive(0), false)

//? Pseudocode: debug and fix conditionals 

const assert = require('assert')

// const checkAlive = health => health <= 0 ? false : true

function checkAlive (health) {
    if (health <= 0) {
      return false
    } else{ (health >= 0) 
      return true
    }
  }
  console.log(checkAlive(-1))

  assert.strictEqual(checkAlive(5), true)
  assert.strictEqual(checkAlive(0), false)  