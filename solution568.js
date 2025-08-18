// Write a function that will take a key of X and place it in the middle of Y repeated N times.

// Extra challege (not tested): You can complete this with under 70 characters without using regex. Challenge yourself to do this. It wont be best practices but it will work.

// Rules:

// If X cannot be placed in the middle, return X.

// N will always be > 0.

// Example:

// X = 'A';

// Y = '*';

// N = 10;

// Y repeated N times = '**********';

// X in the middle of Y repeated N times = '*****A*****';

// 

assert = require('assert')

function middleMe(N, X, Y){
    //get a working solution then try to make it less than 70 characters!
    if (N % 2 === 0) {
        return Y.repeat((N / 2)) + X + Y.repeat((N / 2))
    } else {
        return X
    }
    
}
console.log(middleMe(19, 'z', '#'))

// Input had three parameters one is a number and two are string chars.
// Output is X in the middle of Y repeated N times = '*****A*****'
assert.strictEqual(middleMe(18, 'z', '#'), '#########z#########');
assert.strictEqual(middleMe(19, 'z', '#'), 'z');
// If Nth % 2 == 0, repeat Y an Nth amount of times then slice Nth / 2 + Y repeated Nth / 2