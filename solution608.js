// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function countLetters(str) {
    let results = {}
    for ( item of str) {
        if (results[item]) {
            results[item]++
        } else {
            results[item] = 1
        }
    }
    return results
}
console.log(countLetters('aba'))
// Input is a string.
// Output is a object that keeps count of letters.
// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// Declare a mutable variable and use a for of loop and if else to to check if item is in object. 