// Create a function mispelled(word1, word2):

// mispelled('versed', 'xersed'); // returns true
// mispelled('versed', 'applb'); // returns false
// mispelled('versed', 'v5rsed'); // returns true
// mispelled('1versed', 'versed'); // returns true
// mispelled('versed', 'versed'); // returns true
// It checks if the word2 differs from word1 by at most one character.

// This can include an extra char at the end or the beginning of either of words.

// In the tests that expect true, the mispelled word will always differ mostly by one character. If the two words are the same, return True.

const assert = require('assert')

function mispelled(word1, word2) {
    const checkString = new Set(word1) == word2
    return checkString
}
console.log(mispelled('versed', 'v5rsed'))

// Input will include two parameters both of them strings
// Output is a boolean 

    // assert.strictEqual(mispelled('versed', 'xersed'), true);
    // assert.strictEqual(mispelled('versed', 'applb'), false);

    // assert.strictEqual(mispelled('versed', 'v5rsed'), true);
    // assert.strictEqual(mispelled('1versed', 'versed'), true);
    // assert.strictEqual(mispelled('versed', 'versed1'), true);

    // assert.strictEqual(mispelled('versed', 'aversed'), true);
    // assert.strictEqual(mispelled('aaversed', 'versed'), false);
    // assert.strictEqual(mispelled('versed', 'aaversed'), false);

//  Using new Set and conditionals  
