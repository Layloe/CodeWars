// Task
// Remove all exclamation marks from the end of words. Words are separated by a single space. There are no exclamation marks within a word.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi Hi"
// remove("!!!Hi !!hi!!! !hi") === "!!!Hi !!hi !hi"

function remove (string) {
    const words = string.split(' ')
const findChar = words.map(item => {
    while(item.slice(-1) === '!') item = item.slice(0, -1)
        return item
    })  

    return findChar.join('')
}
console.log(remove("!Hi!!!", "Hi"))
// Input is going to be a string with exclamation marks.
// Output is going to be a string with all exclamation marks removed at the end of the string.
// Example above.
// Make a variable that will split and map string. Then use endsWith to slice. 