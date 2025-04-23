// Create a function that accepts an array of names, and returns an array of each name with its first letter capitalized and the remainder in lowercase.

// Examples
// ['jo', 'nelson', 'jurie'] -->  ['Jo', 'Nelson', 'Jurie']
// ['KARLY', 'DANIEL', 'KELSEY'] --> ['Karly', 'Daniel', 'Kelsey']

function capMe(names) {
    return names.map(item => item[0].toUpperCase() + item.slice(1).toLowerCase())
}
console.log(capMe(['RALPH', 'GEORGIA', 'CHRISTINA']))
// Input is an array of strings that contain names
// OUtput is the same array but with first letter of each item upper and the rest lower
// assert.deepEqual(capMe(['RALPH', 'GEORGIA', 'CHRISTINA']), ['Ralph', 'Georgia', 'Christina']);
// Map through each item and use index to upper and slice to lower