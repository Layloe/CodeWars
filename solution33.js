// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// Parameters: reverse string
// Returns: string that is reversed
// Example: 
// assert.strictEqual(solution('world'), 'dlrow');
//     assert.strictEqual(solution('hello'), 'olleh');
//     assert.strictEqual(solution(''), '');
//     assert.strictEqual(solution('h'), 'h');
// Psudocode: toArray, forloop,

function solution(str) {
console.log(str.split('').reverse().join(''))
  
}

solution('12345')