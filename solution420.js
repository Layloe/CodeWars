// Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

// example

// capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
// capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
function capMe(names) {
    const capName = names.map(item => item[0].toUpperCase() + item.slice(1).toLowerCase())
    return capName
}
console.log(capMe(['jo', 'nelson', 'jurie']))
//input will be an array of strings/names
//output an array of each name with its first letter capitalized.
//see above for examples
//map at index zero toUpperCase + [1] toLowerCase