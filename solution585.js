// Create a function that accepts an array of names, and returns an array of each name with its first letter capitalized and the remainder in lowercase.

// Examples
// ["jo", "nelson", "jurie"] -->  ["Jo", "Nelson", "Jurie"]
// ["KARLY", "DANIEL", "KELSEY"] --> ["Karly", "Daniel", "Kelsey"]

const assert = require('assert')

const capMe = names => names.map(name => name[0].toUpperCase() + name.slice(1).toLowerCase())
// function capMe(names) {
//     return names.map(element => {
//        return element.slice(0,1).toUpperCase() + element.slice(1).toLowerCase()
//     })
// }
console.log(capMe(['RALPH', 'GEORGIA', 'CHRISTINA']))
// Input is an array of names/strings.
// Output is an array with all items first letter capitalized and the remainder lowercase.
assert.strictEqual(capMe(['RALPH', 'GEORGIA', 'CHRISTINA']), ['Ralph', 'Georgia', 'Christina'])
// Map and use index 0 to capitalize first letter then concat and slice to lowercase the rest of the item.