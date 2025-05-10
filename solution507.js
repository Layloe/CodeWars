// You are given a string of n lines, each substring being n characters long. For example:

// s = "abcd\nefgh\nijkl\nmnop"

// We will study the "horizontal" and the "vertical" scaling of this square of strings.

// A k-horizontal scaling of a string consists of replicating k times each character of the string (except '\n').

// Example: 2-horizontal scaling of s: => "aabbccdd\neeffgghh\niijjkkll\nmmnnoopp"
// A v-vertical scaling of a string consists of replicating v times each part of the squared string.

// Example: 2-vertical scaling of s: => "abcd\nabcd\nefgh\nefgh\nijkl\nijkl\nmnop\nmnop"
// Function scale(strng, k, v) will perform a k-horizontal scaling and a v-vertical scaling.

// Example: a = "abcd\nefgh\nijkl\nmnop"
// scale(a, 2, 3) --> "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp"
// Printed:

// abcd   ----->   aabbccdd
// efgh            aabbccdd
// ijkl            aabbccdd
// mnop            eeffgghh
//                 eeffgghh
//                 eeffgghh
//                 iijjkkll
//                 iijjkkll
//                 iijjkkll
//                 mmnnoopp
//                 mmnnoopp
//                 mmnnoopp
// Task:
// Write function scale(strng, k, v) k and v will be positive integers. If strng == "" return "".

function scale(strng, k, n) {
    const doubleCharsHor = strng.split('\n').map((item, index) => item.split('').map(item => item.repeat(k)).join(''))
    const doubleCharsVert = doubleCharsHor.map(item => (item + '\n').repeat(n)).join('')
    return doubleCharsVert
}
console.log(scale("abcd\nefgh\nijkl\nmnop", 2, 3))

// Input will have three params that will have string, the number of times the word is repeated and the full string repeated.
// Output will be a string that is vertically  and horizontally repeated.
// assert.equal(scale(a, 2, 3), r);
// assert.equal(scale("", 5, 5), "");
// assert.equal(scale("Kj\nSH", 1, 2), "Kj\nKj\nSH\nSH");
// Split '/n' then map to repeat items by second param then join and repeat full string nth amount of times. 