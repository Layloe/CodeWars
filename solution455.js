// Task
// Given an array of terms, if any of those terms relate to Alan Partridge, return Mine's a Pint!

// The number of exclamation mark (!) after the t should be determined by the number of Alan related terms you find in the given array (x). The related terms are as follows:

// Partridge
// PearTree
// Chat
// Dan
// Toblerone
// Lynn
// AlphaPapa
// Nomad
// If you don't find any related terms, return Lynn, I've pierced my foot on a spike!!
const assert = require('assert')

function part(x){
    const wordsToMatch = [
        'Partridge',
        'PearTree',
        'Chat',
        'Dan',
        'Toblerone',
        'Lynn',
        'AlphaPapa',
        'Nomad'
    ]
    const results = x.filter(item => wordsToMatch.includes(item)).length
    // console.log(results)
    const exclamationMark = '!'.repeat(results)

    if (results >= 1) {
        return `Mine\'s a Pint${exclamationMark}`
    } 

    return 'Lynn, I\'ve pierced my foot on a spike!!'
}     
console.log(part(['Grouse', 'Partridge', 'Pheasant', 'Goose', 'Starling', 'Robin', 'Thrush', 'Emu', 'PearTree', 'Chat', 'Dan', 'Square', 'Toblerone', 'Lynn', 'AlphaPapa', 'BMW', 'Graham', 'Tool', 'Nomad', 'Finger', 'Hamster']))

// Input will be an array of words
// Output will be one of two strings with exclamation point repeated x number of times depending on matches.
    assert.strictEqual(part(['Grouse', 'Partridge', 'Pheasant']), 'Mine\'s a Pint!');
    assert.strictEqual(part(['Pheasant', 'Goose', 'Starling', 'Robin']), 'Lynn, I\'ve pierced my foot on a spike!!');
    assert.strictEqual(part(['Grouse', 'Partridge', 'Pheasant', 'Goose', 'Starling', 'Robin', 'Thrush', 'Emu', 'PearTree', 'Chat', 'Dan', 'Square', 'Toblerone', 'Lynn', 'AlphaPapa', 'BMW', 'Graham', 'Tool', 'Nomad', 'Finger', 'Hamster']), 'Mine\'s a Pint!!!!!!!!');
// First going to create an array of the matches then filter out any matches then use length to get a num to use with repeat then concat the exclamation marks. Use conditionals to return the right string