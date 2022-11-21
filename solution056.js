// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

//Parameters: Takes in a two strings ('name','owner')
// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

//Return: Use conditionals to return the proper message:

//Example:
// Test.assertEquals(greet('Daniel', 'Daniel'), 'Hello boss')
// Test.assertEquals(greet('Greg', 'Daniel'), 'Hello guest')

//Psuedocode: Use if else stamtment then use temprite literals to place correct string
const assert = require('assert')

const greet = (name,owner) => {

   return name && owner === 'Daniel' ? 'Hello boss' : 'Hello guest'

}

// function greet (name, owner) {
//     if (name && owner === `Daniel`) {
//         return (`Hello boss`)
//     }else{
//         return (`Hello guest`)
//     }
//   }

  greet('Daniel', 'Dan')

    assert.strictEquals(greet('Daniel', 'Daniel'), 'Hello boss')
    assert.strictEquals(greet('Greg', 'Daniel'), 'Hello guest')