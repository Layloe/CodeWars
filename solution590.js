// Your task is very simple. Just write a function that takes an input string of lowercase letters and returns true/false depending on whether the string is in alphabetical order or not.



// Examples (input -> output)
// "kata" -> false ('a' comes after 'k')
// "ant" -> true (all characters are in alphabetical order)
const assert = require('assert');

function alphabetic(s) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const checkStr = s.split('').map((item, index) => {
        if (alphabet.indexOf(item) > alphabet.indexOf(s[index + 1])) {
            return true
        } else {
            return false
        }
    })
    return !checkStr.includes(false)
}
console.log(alphabetic('kata'))
// Input is a string.
// Output is a boolean depending is/isn't in alphabetical order.
    assert.strictEqual("asd", false);
    assert.strictEqual("codewars", false);
    assert.strictEqual("door", true);
    assert.strictEqual("cell", true);
    assert.strictEqual("z", true);
    assert.strictEqual("", true);    