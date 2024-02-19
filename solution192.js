// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

//? Parameters: a string with mixed data types nums and strings

//? Return: a corrected string without any nums

//? Example:
// assert.strictEqual(correct("L0ND0N"),"LONDON");
// assert.strictEqual(correct("DUBL1N"),"DUBLIN");
// assert.strictEqual(correct("51NGAP0RE"),"SINGAPORE");
// assert.strictEqual(correct("BUDAPE5T"),"BUDAPEST");
// assert.strictEqual(correct("PAR15"),"PARIS");

//? Psuedocode:chain split('') to nums 5,0,1 and join('') to "I","O","5" 

const assert = require('assert')

// const correct = string => string.split('0').join('O').split('1').join('I').split('5').join('S')

function correct(string) {

const strSplit = string.split('0').join('O').split('1').join('I').split('5').join('S')
    
    return strSplit
}
console.log(correct("DUBL1N"))

assert.strictEqual(correct("L0ND0N"),"LONDON");
assert.strictEqual(correct("DUBL1N"),"DUBLIN");
assert.strictEqual(correct("51NGAP0RE"),"SINGAPORE");
assert.strictEqual(correct("BUDAPE5T"),"BUDAPEST");
assert.strictEqual(correct("PAR15"),"PARIS");