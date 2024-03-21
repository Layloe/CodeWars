
// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.


//? Prameters: an arr of strings 

//? Return: a string and have "***" between each of its letters

//? Example:
// assert.strictEqual(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
// assert.strictEqual(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e'); 

//? Psuedocode:   "ASCII values of the chars" threw me off into a diffrent direction.Fixed
//? sort()[0]
//? split(')
//? join('***')

const assert =require('assert')

const twoSort = s => s.sort()[0].split('').join('***')

// function twoSort(s) {
//     // const asciiNums = s.map(item => item.charCodeAt())
//     // const asciiToStr = s.map(item => String.fromCharCode())

//     return s.sort()[0].split('').join('***')
// }
console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))

assert.strictEqual(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
assert.strictEqual(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e'); 