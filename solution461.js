// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"
// write the function isAnagram
const assert = require('assert')

function isAnagram (test, original) {
    const sortOriginal = original.toLowerCase('').split('').sort().join('')
    const sortTest =  test.toLowerCase('').split('').sort().join('')

    return  sortTest == sortOriginal
};
console.log(isAnagram("foefet", "toffee"))
// Input will contain two params both strings 
// Output is going to be boolean
    assert.strictEqual(isAnagram("foefet", "toffee"), true, 'The word "foefet" is an anagram of "toffee"')
    assert.strictEqual(isAnagram("Buckethead", "DeathCubeK"), true, 'The word "Buckethead" is an anagram of "DeathCubeK"')
    assert.strictEqual(isAnagram("Twoo", "WooT"), true, 'The word "Twoo" is an anagram of "WooT"')

    assert.strictEqual(isAnagram("dumble", "bumble"), false, 'Characters do not match for test case "dumble", "bumble"')
    assert.strictEqual(isAnagram("ound", "round"), false, 'Missing characters for test case "ound", "round"')
    assert.strictEqual(isAnagram("apple", "pale"), false, 'Same letters, but different count')
// Use a for loop and indexing to check if 'test' letter is included inside 'original' use conditional
// Could't solve the first way so I just winged it to I got it working
