// *** No Loops Allowed ***

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. x can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

//Parameters:an array with (a,x)  value

//Retrun: return true if the array contains the value, false if not

//Example:
// assert.strictEqual(check([66, 101], 66), true);
// assert.strictEqual(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
// assert.strictEqual(check(['t', 'e', 's', 't'], 'e'), true);
// assert.strictEqual(check(['what', 'a', 'great', 'kata'], 'kat'), false);

//Psuedocode: Using includes or find methods (cond ? a : b)

function check(a,x) {
    // let num = a.find(value => a.value == x) //Should've went with the easier route 
    // let boolean = a==num ? true : fasle
    return a.includes(x)

    
}

console.log(check([66, 101]))