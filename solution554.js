// The borrowers are tiny tiny fictional people. As tiny tiny people they have to be sure they aren't spotted, or more importantly, stepped on.

// As a result, the borrowers talk very very quietly. They find that capitals and punctuation of any sort lead them to raise their voices and put them in danger.

// The young borrowers have begged their parents to stop using caps and punctuation.

// Change the input text s to new borrower speak. Help save the next generation!
const assert = require('assert')

function borrow(s){

    return s.toLowerCase().split('').filter(item => !'!"#$%&()*+,-./:;<=>?@[\\]^_`{|}~'.includes(item)).join('').split(' ').join('')
}
console.log(borrow('WhAt! FiCK! DaMn CAke?'))
// Input is a string with upper and lower chars.
// Output is the same string to lower case with no punctuation marks and removed white space.

    assert.strictEqual(borrow('WhAt! FiCK! DaMn CAke?'), 'whatfickdamncake');
    assert.strictEqual(borrow('THE big PeOpLE Here!!'), 'thebigpeoplehere'); 
    assert.strictEqual(borrow('i AM a TINY BoY!!'), 'iamatinyboy'); 

// To lower case then split filter punctuation marks then join. Split with white space then join.