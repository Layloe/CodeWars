// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, the returned array should show them in the order they appeared in the given string.

// All inputs will be valid.
const assert = require('assert')
function last(x){
    return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
        // return x.split(' ').sort((a, b) => a.charCodeAt(-1) > b.charCodeAt(-1))
    }
    console.log(last('man i need a taxi up to ubud'))
    //input will be a string of words
    //output will be an array sorted alphabetically by the final character in each
    // assert.strictEqual(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
    // assert.strictEqual(last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']); 
    // assert.strictEqual(last('take me to semynak'), ['take', 'me', 'semynak', 'to']);
    //create a var then split() then reverse then sort() then reverse back 




// Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

// Notes
// If the array is null/nil/None or empty you should return empty array ([]).
// The rotten fruit name will be in this camelcase (rottenFruit).
// The returned array should be in lowercase.
function removeRotten(bagOfFruits){
    const removeRottenStr = bagOfFruits.map(item => {
        if (item.includes('rotten')) {
            return item.toLowerCase().slice(-6)
        } 
        else {
           return item
        }
    })
    return removeRottenStr
  }
  console.log(removeRotten(["apple","banana","kiwi","rottenMelone","orange"]))
  //input will be an array of strings
  //output will be an array of strings with all 'rotten' removed and replaced
  //examples are lacking information
  //create a var that will hold obj key then use a for of loop to reference key if includes 'rotten'. Scratch that unknown type of fruit. filter for str rotten then splice. Went with map if includes toLowerCase then slice
