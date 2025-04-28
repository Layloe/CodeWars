// In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

const { it } = require("node:test")

// For example:

// solve("xyab","xzca") = "ybzc" 
// --The first string has 'yb' which is not in the second string. 
// --The second string has 'zc' which is not in the first string. 
// Notice also that you return the characters from the first string concatenated with those from the second string.

// More examples in the tests cases.

// Good luck!

function solve(a,b){
    let result = []
    // const sort = [a].sort((a, b) => a - b)
    const findNonMatches = a.split('').sort((item, index) => index - item  )
    return findNonMatches
}
console.log(solve('xyab', 'xzca'))
// Input has two parameters that both contain lowercase strings of random letters.
// Output is going to be a single string that contain any letters not matching.
// assert.assertEquals(solve("xyab","xzca"),"ybzc");
// assert.assertEquals(solve("xyabb","xzca"),"ybbzc");
// assert.assertEquals(solve("abcd","xyz"),"abcdxyz");
// assert.assertEquals(solve("xxx","xzca"),"zca");
// First thing is to split and filter then sort item and if else to compare if any not matches and push to a mutable variable.