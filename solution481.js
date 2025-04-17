// Write a function

// vowel2index(str)
// that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
// E.g:

// vowel2index('this is my string') == 'th3s 6s my str15ng'
// vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
// vowel2index('') == ''
// Your function should be case insensitive to the vowels.
const assert = require('assert')

function vowel2index(str) {
    const vowels = 'aeiouAEIOU'
    const swapVowelsWithIndexNumber = str.split('').map((item, index) => {
        if (vowels.includes(item)) {
            return index + 1
        } 
        if (!vowels.includes(item)) {
            return item 
        }
    })
    return swapVowelsWithIndexNumber.join('')
 }
 console.log(vowel2index('this is my string'))

 // Input is a string of words 
 // Output will include original string with vowels swapped to index number
    assert.strictEqual(vowel2index('this is my string'), 'th3s 6s my str15ng');
    assert.strictEqual(vowel2index('Codewars is the best site in the world'), 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld');
    assert.strictEqual(vowel2index('Tomorrow is going to be raining'), 'T2m4rr7w 10s g1415ng t20 b23 r2627n29ng');
    assert.strictEqual(vowel2index(''), '');
// split map if else includes vowels then replace with index
