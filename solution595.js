// The borrowers are tiny tiny fictional people. As tiny tiny people they have to be sure they aren't spotted, or more importantly, stepped on.

// As a result, the borrowers talk very very quietly. They find that capitals and punctuation of any sort lead them to raise their voices and put them in danger.

// The young borrowers have begged their parents to stop using caps and punctuation.

// Change the input text s to new borrower speak. Help save the next generation!
const assert = require('assert')

function borrow(s){
 return s.toLowerCase().split(' ').join('').split('')
 .filter(item => !'!"#$%&()*+,-./:;<=>?@[\\]^_`{|}~'.includes(item)).join('')
}
console.log(borrow('WhAt! FiCK! DaMn CAke?'))

// Input is going to be a string of letters and punctuation.
// Output is going to be the input string with all the letters in lowercase and all the punctuation removed.
    assert.strictEqual(borrow('WhAt! FiCK! DaMn CAke?'), 'whatfickdamncake');
    assert.strictEqual(borrow('THE big PeOpLE Here!!'), 'thebigpeoplehere'); 
    assert.strictEqual(borrow('i AM a TINY BoY!!'), 'iamatinyboy'); 

// First I'm going to lowercase the string.
// Then I'm going to filter out punctuation.
// Then join the array.