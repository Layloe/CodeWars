// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'
const assert = require('assert')
function defineSuit(card) {
    let cardDeck = {
        '♣' : 'clubs',
        '♦' : 'diamonds',
        '♥' : 'hearts',
        '♠' : 'spades'
       }

    return cardDeck[card.at(-1)]
    // return card.length == 1 ? cardDeck[card[1]] : cardDeck[card[2]]
    
    // if(card.includes('♣')) {
    //     return 'clubs'
    // }
    // if(card.includes('♦')) {
    //     return 'diamonds'
    // }
    // if(card.includes('♥')) {
    //     return 'hearts'
    // }
    // if(card.includes('♠')) {
    //     return 'spades'
    // }
  }
  console.log(defineSuit("Q♠"))
  //input will be a string num that will have special char. The char will be:
  //   ♣ ♦ ♥ ♠
  //output will be one of four strings that will idenify the special char
    assert.strictEqual(defineSuit('Q♠'), 'spades')
    assert.strictEqual(defineSuit('9♦'), 'diamonds')
    assert.strictEqual(defineSuit('J♥'), 'hearts')
  //chain if else or obj recall. Use at() method to reach last char in string



//   An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// Starting with the original text, and given a character, return the text once it has been mutated so that all of the characters in the original text have been replaced with the character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"
function contamination(text, char){
    return char.repeat(text.length)
  }
  console.log(contamination('abc', 'z'))
  //input will be two params both strings
  //output will be a string of on char being repeated over
    assert.strictEqual(contamination("abc","z"), "zzz")
    assert.strictEqual(contamination("","z"), "")
    assert.strictEqual(contamination("abc",""), "")
    assert.strictEqual(contamination("_3ebzgh4","&"), "&&&&&&&&")
    assert.strictEqual(contamination("//case"," "), "      ")
  //find the length of first param then repeat char in second param