// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided 2 dimensional array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// The sub arrays may not be the same length.

// The solution should be case insensitive (ie good, GOOD and gOOd all count as a good idea). All inputs may not be strings.
const assert = require('assert')

function well(x){
    const flatArr = x.flat().map(item => item.toString().toLowerCase())
    const findGood = flatArr.filter(item => item == 'good')
        if (findGood.length > 2) {
            return 'I smell a series!'
        }
        if (findGood.length == 2 || findGood.length == 1) {
            return 'Publish!'
        }

    return 'Fail!'
}
console.log(well([['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'], ['bad'], ['gOOd', 'BAD']]))

// input will be nested arrays that contain words
// output is going to have one of three stings dependent on the input arr
assert.deepEqual(well([['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad']]), 'Fail!');
assert.deepEqual(well([['gOOd', 'bad', 'BAD', 'bad', 'bad'], ['bad', 'bAd', 'bad'], ['GOOD', 'bad', 'bad', 'bAd']]), 'Publish!');
assert.deepEqual(well([['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'], ['bad'], ['gOOd', 'BAD']]), 'I smell a series!');
// first I have to flatten the nested arrays then filter the word 'good' with lowercase then use conditionals to see if length meets threshold. Rewrote to include map for test cases.