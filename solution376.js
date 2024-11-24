// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

function twoSort(arr) {
    const sortArr = arr.sort()[0]
    return sortArr.split('').join('***')
    //! I went the long way oof
    // const toAsciiValues = arr.map(item => item.charCodeAt()).sort((a,b) => a - b)
    // const toString = toAsciiValues.map(item => String.fromCharCode(item))
    // return toString.join('***')
}
console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))

//input is going to be an array of strings
//output is a string with "***" between each of its letters
// ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' )
// I need to declare a variable that will loop thru the arr and return a sorted arr based on ascii values. Then I need to transform it back to letters and join the array with ***