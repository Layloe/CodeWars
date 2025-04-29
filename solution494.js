// The other day I saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.

// In this kata we will recreate that stunt... sort of.

// You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.

// The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.

// Return the resulting lamps string. See example tests for more clarity.
const assert = require('assert')

function flyBy(lamps, drone){
    const cleanInput = lamps.split('').filter(item => item == 'x').join('')
    const replaceChars = cleanInput.replaceAll('x', 'o')
    const findDifference = lamps.length - drone.length

    return replaceChars.slice(findDifference) + replaceChars.slice(0, findDifference).replaceAll('o', 'x')
}
console.log(flyBy( "xxxxxxxxxxxxxxxxxxxx", "====================T" ))

// Input has two parameters both are strings.
// Output is a string of 'o's and 'x's.
    // assert.strictEqual(flyBy('xxxxxx', '====T'), 'ooooox');
    // assert.strictEqual(flyBy('xxxxxxxxx', '==T'), 'oooxxxxxx'); 
    // assert.strictEqual(flyBy('xxxxxxxxxxxxxxx', '=========T'), 'ooooooooooxxxxx')
// Use length to solve, create two variables to replace all. Went free style and came up with this.

