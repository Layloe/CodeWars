// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'


//Parameters: A sting with two charactors the second which is symbolic representaion of a card suite(4 suits)
//Return: a string of the name of the suit ONLY, in all lowercase letters, and plural
//Examples:
// it('Testing №2 for "Q♠"', () => assert.strictEqual(defineSuit('Q♠'), 'spades'));
// it('Testing №3 for "9♦"', () => assert.strictEqual(defineSuit('9♦'), 'diamonds'));
// it('Testing №4 for "J♥"', () => assert.strictEqual(defineSuit('J♥'), 'hearts'));
// ('Q♠'), 'spades')
// ('9♦'), 'diamonds')
// ('J♥'), 'hearts')

//Pseudocode: 


function defineSuit(card) {
    if(card.includes('♠'))  return('spades')
    if(card.includes('♦'))  return('diamonds')
    if(card.includes('♥'))  return('hearts')
    if(card.includes('♣'))  return('clubs')
  }

  defineSuit('9♦')