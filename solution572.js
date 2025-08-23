// Description:
// You'll be given a string of characters as an input. Complete the function that returns a list of strings: (a) in the reverse order of the original string, and (b) with each successive string starting one character further in from the end of the original string.

// Assume the original string is at least 3 characters long. Try to do this using slices and avoid converting the string to a list.

// Examples
// '123'   ==>  ['321', '21', '1']
// 'abcde' ==>  ['edcba', 'dcba', 'cba', 'ba', 'a']

function reverseSlice(str) {
  let results = []
  const parseStr = str.split('').reverse().map((item, index, arr) => {
    results.push(arr.slice(index).join(''))
  })
  return results
}
console.log(reverseSlice('123'))

// Input is a string.
// Output is an array of strings.
    // assert.strictEqual(reverseSlice('123'), ['321', '21', '1'], "reverseSlice('123')")
    // assert.strictEqual(reverseSlice('abcde'), ['edcba', 'dcba', 'cba', 'ba', 'a'], "reverseSlice('abcde')")
// Split reverse map then use a while loop and a mutable variable to push. If length is less then.