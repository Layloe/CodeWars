// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake
const assert = require('assert')
function correct(string){

    return string.replaceAll('0','O').replaceAll('5','S').replaceAll('1','I')
	// if (string.includes('0') ){
    //     return string.replaceAll('0','O')
    // }  
    // if (string.includes('5')){
    //     return string.replaceAll('5','S')
    // }
    // if (string.includes('1')){
    //     return string.replaceAll('1','I')
    // }
}
console.log(correct("L0ND0N"))
//input is going to be a string with mix char/nums
//output is going to be a corrected string
assert.strictEqual(correct("L0ND0N"),"LONDON");
assert.strictEqual(correct("DUBL1N"),"DUBLIN");
assert.strictEqual(correct("51NGAP0RE"),"SINGAPORE");
assert.strictEqual(correct("BUDAPE5T"),"BUDAPEST");
assert.strictEqual(correct("PAR15"),"PARIS");
//use conditionals and the method replaceAll