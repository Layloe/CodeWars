// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

//? Prameters: a str with a emoji of card suits

//? Return: a string of the word of the suit

//? Example:
// it('Testing №2 for "Q♠"', () => assert.strictEqual(defineSuit('Q♠'), 'spades'));
// it('Testing №3 for "9♦"', () => assert.strictEqual(defineSuit('9♦'), 'diamonds'));
// it('Testing №4 for "J♥"', () => assert.strictEqual(defineSuit('J♥'), 'hearts'));

//? Psuedocode: condtionals 
//? includes(♠)
// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

const assert = require('assert')

// const defineSuit = card =>   
//  card.includes('♣')? 'clubs' :
//     ? card.includes('♦') 'diamonds' : card.includes('♥')   **come back to practice chaining turnaray operators https://explorer.globe.engineer/
//     ? 'hearts'
//      ? card.includes('♠')

function defineSuit(card) {
    if (card.includes('♣')) {
        return 'clubs'
    }
    if (card.includes('♦')) {
        return 'diamonds'
    }
    if (card.includes('♥')) {
        return 'hearts'
    }
    if (card.includes('♠')) {
        return 'spades'
    }
  }
console.log(defineSuit('3♥'))

assert.strictEqual(defineSuit('Q♠'), 'spades')
assert.strictEqual(defineSuit('9♦'), 'diamonds')
assert.strictEqual(defineSuit('J♥'), 'hearts')