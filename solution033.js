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
// Psudocode: First need to split string then reverse, finally join it all back. Then call

function solution(str) {
return (str.split('').reverse().join(''))
  
}

solution('12345')