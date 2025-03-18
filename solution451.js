// To celebrate the start of the Rio Olympics (and the return of 'the Last Leg' on C4 tonight) this is an Olympic inspired kata.

// Given a string of random letters, you need to examine each. Some letters naturally have 'rings' in them. 'O' is an obvious example, but 'b', 'p', 'e', 'A', etc are all just as applicable. 'B' even has two!! Please note for this kata you can count lower case 'g' as only one ring.

// Your job is to count the 'rings' in each letter and divide the total number by 2. Round the answer down. Once you have your final score:

// if score is 1 or less, return 'Not even a medal!'; if score is 2, return 'Bronze!'; if score is 3, return 'Silver!'; if score is more than 3, return 'Gold!';

// Dots over i's and any other letters don't count as rings
const assert = require('assert')

function olympicRing(a){
    const findRings = Math.floor(a.split('').filter(item => [`a`,`b`,`d`,`e`,`g`,`o`,`p`,`q`,`A`,`D`,`O`,`P`,`Q`,`R`].includes(item)).length / 2)

    if (findRings <= 1) {
        return 'Not even a medal!'
    }
    if (findRings == 2) {
        return 'Bronze!'
    }
    if (findRings == 3) {
        return 'Silver!'
    }
    if (findRings >= 4) {
        return 'Gold!'
    }

    return findRings 

}
console.log(olympicRing('sWEBWePVsQjGgPsxvbroThLJCn'))
// Input will contain a string of random upper and lowercase letters
// Output will be one of four strings; if score is 1 or less, return 'Not even a medal!'; if score is 2, return 'Bronze!'; if score is 3, return 'Silver!'; if score is more than 3, return 'Gold!';
    assert.strictEqual(olympicRing('wHjMudLwtoPGocnJ'), 'Bronze!');
    assert.strictEqual(olympicRing('eCEHWEPwwnvzMicyaRjk'), 'Bronze!'); 
    assert.strictEqual(olympicRing('JKniLfLW'), 'Not even a medal!'); 
// Figure out what letters count as 'rings' then split filter length with conditionals to return the correct string. Might even make a obj library for fun

