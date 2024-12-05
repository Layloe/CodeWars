// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
const assert = require('assert')

function smash (words) {
    if (words == '') {
        return "this is a really long sentence"
    }

    return words.join(' ')
}
console.log(smash(["this", "is", "a", "really", "long", "sentence"]))
//input is going to be an array of only words/strings
//output will be the words from the arr returned in one string separated by white space.
//['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
//first join ' ' as the delimiter to change arr to string/sentence.Edge case will be a conditional. 
assert.strictEqual(smash(["hello", "world"]), "hello world");
assert.strictEqual(smash(["hello", "amazing", "world"]), "hello amazing world");
assert.strictEqual(smash([]), "this is a really long sentence");


// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// const assert = require('assert')
function fakeBin(x){
    return x.split('').map(item => item <= 4 ? '0' : '1').join('')
}
console.log(fakeBin('45385593107843568'))
//input is going to be string that contains nums and will never be empty
//output will be a string of numbers 0's and 1's
// ('45385593107843568'), '01011110001100111')
//first thing is to split str into an arr, then loop thru using conditionals to determent if the letter will be a '1' or a '0' finally join()
assert.strictEqual(fakeBin('45385593107843568'), '01011110001100111');
assert.strictEqual(fakeBin('509321967506747'), '101000111101101'); 
assert.strictEqual(fakeBin('366058562030849490134388085'), '011011110000101010000011011');
