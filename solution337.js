// The code provided is supposed return a person's Full Name given their first and last names.

// But it's not working properly.

// Notes
// The first and/or last names are never null, but may be empty.

// Task
// Fix the bug so we can all go home early.

//? Parameters: total of two strings on with each param: first and last names

//? Return: a working constructor 

//? Example:
//   Test.assertEquals(new Dinglemouse("Clint", "Eastwood").getFullName(), "Clint Eastwood")

//? Pseudocode: debug: create vars in constructor with: this. Then fix the function concat.
//edge cases add .trim()

const assert = require('assert')

class Dinglemouse {

    constructor( firstName,lastName ){
        this.firstName = firstName
        this.lastName = lastName
    }
    
    getFullName(){
      return `${this.firstName} ${this.lastName}`.trim()
    }
    
  }
console.log(new Dinglemouse("Clint", "Eastwood").getFullName())

assert.strictEqual(new Dinglemouse("Clint", "Eastwood").getFullName(), "Clint Eastwood")