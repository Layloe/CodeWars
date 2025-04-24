// Description:
// Complete the solution so that it returns the number of times the search_text is found within the full_text. Overlap is not permitted : "aaa" contains 1 instance of "aa", not 2.

// Usage example:

// full_text = "aa_bb_cc_dd_bb_e", search_text = "bb"
//     ---> should return 2 since "bb" shows up twice


// full_text = "aaabbbcccc", search_text = "bbb"
//     ---> should return 1
const assert = require('assert')

function solution(fullText, searchText){

  return fullText.split(searchText).length - 1
}
console.log(solution('abbcbbdbb','bb'))

// Input has two parameters both containing strings
// Output is a number based on how many times chars are found
    assert.strictEqual(solution('abcdeb','b'), 2);
    assert.strictEqual(solution('abc','b'), 1);
    assert.strictEqual(solution('abbc','bb'), 1);
// Split then do a for of loop to push to a counter 