// Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// ['John', 'Smith'], 'Phoenix', 'Arizona'
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!


//? Parameters: takes in 3 parameters "name, city, and state" the name param is an arr of strings and the other two are strings

//? Return:  a string that includes all 4 params

//? Example:
// assert.strictEqual(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'), 'Hello, John Smith! Welcome to Phoenix, Arizona!')
// assert.strictEqual(sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois'), 'Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!')
// assert.strictEqual(sayHello(['Wallace','Russel','Osbourne'],'Albany','New York'), 'Hello, Wallace Russel Osbourne! Welcome to Albany, New York!')

//? Psuedocode: 
//?declare a var that will map() split(',') and join(' ') the name param
//? use template literals to input city and state

const assert = require('assert')

function sayHello( name, city, state ) {
    const nameArr = name.map(item => item.split(',')).join(' ')
    
    return `Hello, ${nameArr}! Welcome to ${city}, ${state}!`
    
}
console.log(sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois'))

assert.strictEqual(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'), 'Hello, John Smith! Welcome to Phoenix, Arizona!')
assert.strictEqual(sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois'), 'Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!')
assert.strictEqual(sayHello(['Wallace','Russel','Osbourne'],'Albany','New York'), 'Hello, Wallace Russel Osbourne! Welcome to Albany, New York!')