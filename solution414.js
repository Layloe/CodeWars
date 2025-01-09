// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, the returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

const assert = require('assert')
function last(x){
    // const sortReversedArr = x.split('').reverse().join('').split(' ').sort().join(' ')
    // const sortArr = sortReversedArr.split('').reverse().join('').split(' ').reverse()
    
    // return sortArr

    return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
}
console.log(last('man i need a taxi up to ubud'))
//input is going to be a string of words
//output will be an array sorted alphabetically by the last char.
assert.deepEqual(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
assert.deepEqual(last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']); 
assert.deepEqual(last('take me to semynak'), ['take', 'me', 'semynak', 'to']);  
//split to arr find the last index of all words sort and push
//combination of split join reverse and sort then repeating the process