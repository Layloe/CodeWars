// Valid Palindrome
// Given a string s, return true if it is a palindrome, otherwise return false.

// A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

// Note: Alphanumeric characters consist of letters (A-Z, a-z) and numbers (0-9).

// Example 1:

// Input: s = "Was it a car or a cat I saw?"

// Output: true
// Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.

// Example 2:

// Input: s = "tab a cat"

// Output: false
// Explanation: "tabacat" is not a palindrome.

// Constraints:

// 1 <= s.length <= 1000
// s is made up of only printable ASCII characters.

function isPalindrome(s) {
    let results = ''
    const cleanStr = s.toLowerCase().split('').filter(item => '1234567890abcdefghijklmnopqrstuvwxyz'.includes(item))
    for (item of s) {
        if (this.cleanStr)
    }
    // const cleanStr = s.toLowerCase().split('').reverse().join('')
    // return s == cleanStr
    // console.log(cleanStr)
    // for (item of s) {
    //     if (results[item]) {
    //         results[item]
    //     } else {
    //         results[item] = 1
    //     }
    // }
    
}
console.log(isPalindrome("racecar"))
// Input is a string that is or isn't a palindrome.
// Output is a boolean.
// Example above.
// Split to lowercase then map alphanumeric with regex then use if else to reverse then compare.