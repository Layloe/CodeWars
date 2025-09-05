// You will be given two ASCII strings, a and b. Your task is write a function to determine which one of these strings is "worth" more, and return it.

// A string's worth is determined by the sum of its ASCII codepoint indexes. So, for example, the string HELLO has a value of 372: H is codepoint 72, E 69, L 76, and O is 79. The sum of these values is 372.

// In the event of a tie, you should return the first string, i.e. a.

function greaterSum (a, b) { //! Change map to String atCharCode
    const findSumA = a.split('').map((item, index) => a.charCodeAt(index)).reduce((acc, curr) => curr + acc)
    const findSumB = b.split('').map((item, index )=> b.charCodeAt(index)).reduce((acc, curr) => curr + acc)

    return findSumA > findSumB ? a : b 
}
console.log(greaterSum('Hello', 'Helloo'))
// Input has two params both strings.
// Output returns one of two strings.
// Example above.
// Split map with charCode at method, then reduce to get sum and finally use if else to compare strings and return greater string.