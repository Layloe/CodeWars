// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, the returned array should show them in the order they appeared in the given string.

// All inputs will be valid.
const assert = require('assert')

function last(x) {
    const toArrSort = x.split(' ').map(item => [...item].reverse()).sort()
    return toArrSort.map(item => [...item].reverse().join(''))
}
console.log(last('man i need a taxi up to ubud'))
// Input will be a string of words
// Output will be an array of the same string sorted by last letter in each word
    assert.deepEqual(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
    assert.deepEqual(last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']); 
    assert.deepEqual(last('take me to semynak'), ['take', 'me', 'semynak', 'to'])
// Split map reverse each item then sort then split map reverse and finally join