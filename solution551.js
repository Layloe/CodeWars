// You need to write a function, that returns the first non-repeated character in the given string.

// If all the characters are unique, return the first character of the string.
// If there is no unique character, return null in JS or Java, None in Python, '\0' in C.

// You can assume, that the input string has always non-zero length.

// Examples
// "test"   returns "e"
// "teeter" returns "r"
// "trend"  returns "t" (all the characters are unique)
// "aabbcc" returns null (all the characters are repeated)

function firstNonRepeated(s) {
    let results = {}
  for (item of s) {
       results[item] = (results[item] || 0) + 1
    } 
    for (item of s) {
        if (results[item] === 1) return item
    }

    return null
}
console.log(firstNonRepeated("teeter"))
// Input is a string.
// Output is a boolean.
// Example above.
// try hashmap