// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

//? Parameters: an array of strings

//? Return: three strings dependent on results 'Fail!' 'Publish!' 'I smell a series!'

//? Example:
// assert.strictEqual(well(['bad', 'bad', 'bad']), 'Fail!');
// assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
// assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');

//? Psuedocode: 
//? iderate through arr filter string 'good'
//? condtional if
//?  return 'Fail!' if none, return 'Publish!' if one is found,  ? >3 'I smell a series!'

const assert = require('assert')

function well(x){
    const lenghtNum = x.filter(item => item =='good').length
    return lenghtNum < 1 ? 'Fail!' :  
    lenghtNum < 3  ? 'Publish!' : 'I smell a series!' 

}
    console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']))

assert.strictEqual(well(['bad', 'bad', 'bad']), 'Fail!');
assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');