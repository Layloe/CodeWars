// The function is not returning the correct values. Can you figure out why?

// Example (Input --> Output ):

// 3 --> "Earth"

//? Parameters: a number

//? Return: the correct string for the number entered

//? Example:
// (getPlanetName(2), 'Venus')

//? Pseudocode: debug
// fix switch statement 
// add break

const assert = require('assert')


function getPlanetName(id){ 
    var name
    switch(id){
      case 1: name = 'Mercury'
        break
      case 2: name = 'Venus'
        break 
      case 3: name = 'Earth'
        break
      case 4: name = 'Mars'
        break
      case 5: name = 'Jupiter'
        break 
      case 6: name = 'Saturn'
        break 
      case 7: name = 'Uranus'
        break 
      case 8: name = 'Neptune'
        break 
        // poor Pluto 
    }
    
    return name
  }
  console.log(getPlanetName(2))

assert.strictEqual(getPlanetName(2), 'Venus');
assert.strictEqual(getPlanetName(5), 'Jupiter');
assert.strictEqual(getPlanetName(3), 'Earth');