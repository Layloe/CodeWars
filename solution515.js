// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).

// Examples
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
const assert = require('assert')

function initializeNames(name){
  const middleName = name.split(' ').map((item, index, arr) => {
    if (arr.length === 1) {
        return arr
    }
    if (arr.length === 2) {
        return item
    }
    if (arr.length === 3) {
    return `${arr[0]} ${arr[1].slice(0, 1) + '.'} ${arr[2]}`.slice(0, 1).join('')
    }
    if (arr.length === 4) {
    return `${arr[0]} ${arr[1].slice(0, 1) + '.'} ${arr[2].slice(0, 1) + '.'} ${arr[3]}`.slice(0, 1).join('')
    }
  })
  return String(middleName)
}
console.log(initializeNames('Dimitri'))
// Input is a string of first middle and last names.
// Output is string with all names that are not first or last will be initialized.
    assert.strictEqual(initializeNames('Dimitri'), 'Dimitri');
    assert.strictEqual(initializeNames('Jack Ryan'), 'Jack Ryan');
    assert.strictEqual(initializeNames('Lois Mary Lane'), 'Lois M. Lane');
    assert.strictEqual(initializeNames('Alice Betty Catherine Davis'), 'Alice B. C. Davis');
// First we split by white space then map to check length of array. If array contains more then three items then then slice[0] and + '.' else item then join.