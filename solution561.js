// Your task is to write an update for a lottery machine. Its current version produces a sequence of random letters and integers (passed as a string to the function). Your code must filter out all letters and return unique integers as a string, in their order of first appearance. If there are no integers in the string return "One more run!"

// Examples
// "hPrBKWDH8yc6Lt5NQZWQ"  -->  "865"
// "ynMAisVpHEqpqHBqTrwH"  -->  "One more run!"
// "555"                   -->  "5"

function lottery(str){
    const getOnlyNums = str.split('').map(item => '0123456789'.includes(item) ? item : '').join('')
    return [...new Set(getOnlyNums)].join('')
}
console.log(lottery("wQ8Hy0y5m5oshQPeRCkG"))
// Input is a string.
// Output is a number with no dups.

// Test.assertSimilar(lottery("wQ8Hy0y5m5oshQPeRCkG"), "805", "should return unique integer(s) or a string");
// Test.assertSimilar(lottery("ffaQtaRFKeGIIBIcSJtg"),"One more run!", "should return unique integer(s) or a string");

// Split and filter then parseInt to get nums then use New set to remove duplicates.