// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

//? Parameters: two paras both strings one is scrambled letters other is a word

//? Return: a boolean if anagram ? (contains all letters) else

//? Example:
// assert.strictEqual(isAnagram("foefet", "toffee"), true, 'The word "foefet" is an anagram of "toffee"')
// assert.strictEqual(isAnagram("Buckethead", "DeathCubeK"), true, 'The word "Buckethead" is an anagram of "DeathCubeK"')
// assert.strictEqual(isAnagram("Twoo", "WooT"), true, 'The word "Twoo" is an anagram of "WooT"')

// assert.strictEqual(isAnagram("dumble", "bumble"), false, 'Characters do not match for test case "dumble", "bumble"')
// assert.strictEqual(isAnagram("ound", "round"), false, 'Missing characters for test case "ound", "round"')
// assert.strictEqual(isAnagram("apple", "pale"), false, 'Same letters, but different count')

//? Pseudocode: var 
//? split('')
//? map()
//? length
//? includes()

// write the function isAnagram
var isAnagram = function(test, original) {
    const testCompare = test.split('')
    const originalMatch = original.split('')

    return testCompare.filter((item, index) => item.includes()  ) //come back here. Hold original word and see if letter is includes if true continue to the next letter if not included false

};
console.log(isAnagram("foefet", "toffee"))

// assert.strictEqual(isAnagram("foefet", "toffee"), true, 'The word "foefet" is an anagram of "toffee"')
// assert.strictEqual(isAnagram("Buckethead", "DeathCubeK"), true, 'The word "Buckethead" is an anagram of "DeathCubeK"')
// assert.strictEqual(isAnagram("Twoo", "WooT"), true, 'The word "Twoo" is an anagram of "WooT"')

// assert.strictEqual(isAnagram("dumble", "bumble"), false, 'Characters do not match for test case "dumble", "bumble"')
// assert.strictEqual(isAnagram("ound", "round"), false, 'Missing characters for test case "ound", "round"')
// assert.strictEqual(isAnagram("apple", "pale"), false, 'Same letters, but different count')