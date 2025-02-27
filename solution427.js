// The other day I saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.

const { it } = require("node:test")

// In this kata we will recreate that stunt... sort of.

// You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.

// The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.

// Return the resulting lamps string. See example tests for more clarity.
const assert = require('assert')

function flyBy(lamps, drone){
    const exesAndOhs = lamps.split('')
    .map((item, index) => index < drone.length ? 'o' : item)
    .join('')

    // let arr = []
    // const test = drone.indexOf('x')
    // const diff = lamps.length - drone.length
    // for (const curr of drone) {
    //     if (curr == '=') {
    //         arr.push('o')
    //     }
    //     if (curr == 'T') {
    //         arr.push('x')
    //     }
    // }
    // return arr + 'x'.repeat(diff) 
    return exesAndOhs
}
console.log(flyBy('xxxxxxxxx', '==T'))
// input will have to params and both will be strings
// output will be a string of "o"'s and "x"'s from where the event begins
    assert.strictEqual(flyBy('xxxxxx', '====T'), 'ooooox');
    assert.strictEqual(flyBy('xxxxxxxxx', '==T'), 'oooxxxxxx'); 
    assert.strictEqual(flyBy('xxxxxxxxxxxxxxx', '=========T'), 'ooooooooooxxxxx');
// declare two variables then split first parameter string to array. Get length




