// Valid Anagram
// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: s = "racecar", t = "carrace"

// Output: true
// Example 2:

// Input: s = "jar", t = "jam"

// Output: false

function isAnagram(s, t) {

    console.log([...t].sort())
    let results = []
    for (item of s) {
        if (item[t]) {
            item[t]
        }
    }
    return results
}
console.log(isAnagram('racecar', 'carrace'))