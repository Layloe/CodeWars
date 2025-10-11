// Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

// Notes
// If the array is null/nil/None or empty you should return empty array ([]).
// The rotten fruit name will be in this camelcase (rottenFruit).
// The returned array should be in lowercase.
const assert = require('assert')

function removeRotten(bagOfFruits){
    const library = {
        "apple": 'rottenApple',
        "banana": "rottenBanana",
        "kiwi": "rottenKiwi",
        "melone": "rottenMelone",
        "orange": "rottenOrange"
    }       
    const results = bagOfFruits.map(fruit => fruit.replace(/rotten/gi, ''))
    return results.map(fruit => fruit.toLowerCase())
}
console.log(removeRotten(['apple','rottenBanana','apple']))
// Input is an array of strings.
// Output is an array of strings where all words that innclude rotten are replaced with the fruit name without the rotten prefix.
    assert.strictEqual(removeRotten(['apple','rottenBanana','apple']), ['apple','banana','apple']);
    assert.strictEqual(removeRotten(['rottenApple','rottenBanana','rottenCherry']), ['apple','banana','cherry']);
    assert.strictEqual(removeRotten(['rottenApple','rottenBanana','rottenCherry','rottenDate']), ['apple','banana','cherry','date']);
// Create a library of fruits and their rotten versions.
