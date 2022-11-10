// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.
//Parameters:
//Return:
//Examples:
// assert.strictEqual(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
//     assert.strictEqual(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e'); 
//Psudocode: Return string 

// function sumTwoSmallestNumbers(numbers) { 
    //     let firstNum = Math.min(...numbers)
    //     numbers.splice(numbers.indexOf(firstNum), 1)
    //     let secondNum = Math.min(...numbers)
    // //     return (firstNum + secondNum)
    //     let arr = numbers.sort( (a, b) => a - b )
    //     return (arr[0] + arr[1])
    function twoSort(s) {
        return s.sort()[0].split('').join('***');
      }
      