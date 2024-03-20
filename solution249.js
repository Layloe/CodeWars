
// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.


//? Prameters: an arr of strings 

//? Return: a string and have "***" between each of its letters

//? Example:
// assert.strictEqual(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
// assert.strictEqual(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e'); 

//? Psuedocode: declare a var that changes strings in array to the ASCII values of the chars
//? sort()
//? slice(-1)
//? join('***')

function twoSort(s) {
    const asciiNums = s.map(item => item.charCodeAt()).sort()
    const asciiToStr = asciiNums.map(item => item.slice(-1))

    return asciiToStr
}
console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))

// assert.strictEqual(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
// assert.strictEqual(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e'); 