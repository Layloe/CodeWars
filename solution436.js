// Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

// Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

// Rules:

// Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.
const assert = require('assert')

function gordon(a){
    let solution = []
    const smushWords = a.split('').map(item => {
        if (item == 'a' || item == 'A') {
            return '@'
        }
        if (item == 'a' || item == 'e' || item == 'i' || item == 'o' || item == 'u') {
            return '*'
        } else {
            return item
        }
    })
    return smushWords.join('').toUpperCase().split(' ').join('!!!! ') + '!!!!'
}
console.log(gordon('What feck damn cake'))
// input will be a string of words
// output will return the same string and every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.
    assert.strictEqual(gordon('What feck damn cake'), 'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!');
    assert.strictEqual(gordon('are you stu pid'), '@R*!!!! Y**!!!! ST*!!!! P*D!!!!'); 
    assert.strictEqual(gordon('i am a chef'), '*!!!! @M!!!! @!!!! CH*F!!!!');  
// First split then map use conditionals and replaceAll meet params. Use template literal to concat
