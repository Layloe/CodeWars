// Error Handling is very important in coding and seems to be overlooked or not implemented properly.

// #Task

// Your task is to implement a function which takes a string as input and return an object containing the properties vowels and consonants. The vowels property must contain the total count of vowels {a,e,i,o,u}, and the total count of consonants {a,..,z} - {a,e,i,o,u}. Handle invalid input and don't forget to return valid ones.

// #Input

// The input is any random string. You must then discern what are vowels and what are consonants and sum for each category their total occurrences in an object. However you could also receive inputs that are not strings. If this happens then you must return an object with a vowels and consonants total of 0 because the input was NOT a string. Refer to the Example section for a more visual representation of which inputs you could receive and the outputs expected. :)

// Example:
// Input: getCount('test')
// Output: {vowels:1,consonants:3}

// Input: getCount('tEst')
// Output: {vowels:1,consonants:3}

// Input getCount('    ')
// Output: {vowels:0,consonants:0}

// Input getCount()
// Output: {vowels:0,consonants:0}
const assert = require('assert')

function getCount(words) {
    let results = {vowels: 0, consonants: 0}
    const vowels = 'aeiouAEIOU'
    for (item of words) {
        if (vowels.includes(item)) {
            results.vowels++
        } else if (/[a-zA-Z]/.test(item)){
            results.consonants++
        }
    }
    return results
}
console.log(getCount('Test'))

// Input is a string.
// Output is an object that contains a count of vowels and consonants: {vowels:1,consonants:3}
// Example above
    assert.deepEqual(getCount('Test'), {vowels:1,consonants:3},'Should return 1 vowel and 3 consonants');
    assert.deepEqual(getCount('Here is some text'), {vowels:6,consonants:8},'Should return 6 vowel and 8 consonants');
    assert.deepEqual(getCount('To be a Codewarrior or not to be'), {vowels:12,consonants:13},'Should return 12 vowel and 13 consonants');
    assert.deepEqual(getCount('To Kata or not to Kata'), {vowels:8,consonants:9},'Should return 8 vowel and 9 consonants');
    assert.deepEqual(getCount('aeiou'), {vowels:5,consonants:0},'Should return 5 vowel and 0 consonants');
// Create a mutable variable that will hold an empty object, then use a for of loop with if else. Loop through to find upper and lower case vowels. If true add to the vowel counter else add to consonants counter. Then work on edge cases.