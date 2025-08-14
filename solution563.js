// Mary brought home a "spot the differences" book. The book is full of a bunch of problems, and each problem consists of two strings that are similar. However, in each string there are a few characters that are different. An example puzzle from her book is:

// String 1: "abcdefg"
// String 2: "abcqetg"
// Notice how the "d" from String 1 has become a "q" in String 2, and "f" from String 1 has become a "t" in String 2.

// It's your job to help Mary solve the puzzles. Write a program spot_diff/Spot that will compare the two strings and return a list with the positions where the two strings differ. In the example above, your program should return [3, 5] because String 1 is different from String 2 at positions 3 and 5.
const assert = require('assert')

function spot(s1,s2) {
    let results = []

    for (item of s1) {
          if (!s2.includes(item)) {
          results.push((s1.indexOf(item)))
        }
    }
 
    return results
}
console.log(spot('abcdefg', 'abcqetg'))
// Input has two parameters and are both strings.
// Output is an array of two numbers.
    assert.deepEqual(spot('abcdefg', 'abcqetg'), [3, 5], 'Whoops!');
    assert.deepEqual(spot('Hello World!', 'hello world.'), [0, 6, 11], 'Capitalization and punctuation matter!');
    assert.deepEqual(spot('FixedGrey', 'FixedGrey'), [], 'Should return [] if the strings are the same!');
// Split map and if else. Possible nested loop.