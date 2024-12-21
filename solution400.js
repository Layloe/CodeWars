//active recall
function otherFerd(number) {
    let testStorage = ''
    for (let i = 1; i <= 10; i++) {
        testStorage += `${i} * ${number} = ${i * number}\n`
    }
    return testStorage
}
console.log(otherFerd(5))


// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
const assert = require('assert')
function well(arr){ 
    if (arr.filter(item => item == 'good').length >= 3) {
        return 'I smell a series!'
    }
    if (arr.filter(item => item == 'good').length == 1 || arr.filter(item => item == 'good').length == 2) {
        return 'Publish!'
    }
    if (arr.filter(item => item == 'good').length == 0) {
        return 'Fail!'
    }
}
console.log(well(['bad', 'bad', 'bad', 'good']))
//input will be an array of string that contain the words 'good' or 'bad'
//output is going to be one of three strings
assert.strictEqual(well(['bad', 'bad', 'bad']), 'Fail!');
assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');
//filter through arr to find string 'good' then use the length method with conditionals to determine string outcome.


// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"
function remove (string) {
    if (string.at(-1) == "!") {
        return string.slice(0,-1)
    } else {
        return string
    }
    // return string.split('').filter(item => item !== '!').join('')
    // return string.split('!').join('')
  }
  console.log(remove('!Hi!'))
  //input will be a string
  //output will be a string without any exclamation points
  //examples above
  // use the method split and join to remove all !