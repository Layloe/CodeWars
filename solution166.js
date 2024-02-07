// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//? Parameters: a str

//? Return: the number (count) of vowels in the given string

//? Example:
// assert.strictEqual(getCount("abracadabra"), 5)

//? Psuedocode: for loop that includes vowls then += to mutable var

// const assert = require('assert')

function getCount(str) {
    const test = str.split('').filter(item => 'aeiou'.indexOf(item))
    // const vowelCount = []
    return test
}
 console.log(getCount("abracadabra"))

//  assert.strictEqual(getCount("abracadabra"), 5)

//  const numOfVowls = 0
//  //     // const vowls = 'aeiou'
 //     str.spilt('').forEach(item => {
 
 //         if (item =='a' || item =='e' || item =='i' || item =='o' || item == 'u') {
 //             numOfVowls += 1
 //         }
         
 //     })
 
 //     return numOfVowls
 //   }
