// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.
function twoSort(s) {
    // const parseArr = s.join('').split('').map(item => item.charCodeAt()).sort()
    // const asciiToString = parseArr.map(item => String.fromCharCode(item)).sort()
    // return asciiToString
    return s.sort()[0].split('').join('***')
}
console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))
//input will be an array of strings
//output is a sorted string that will include the first char of each word in the arr. Each letter/char will be separated with ***
// assert.strictEqual(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
// assert.strictEqual(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e'); 
//declare a variable that will loop through array and change it to ascii values. then I will sort alphabetically and slice fist char and finally join