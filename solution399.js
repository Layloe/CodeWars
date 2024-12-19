// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"
const assert = require('assert')
function nameShuffler(str){
    return str.split(' ').reverse().join(' ')
  }
  console.log(nameShuffler('john McClane'))
  'john McClane'
  //input will be string. First and last name
  //output will be a string that swapped indexes
    assert.strictEqual(nameShuffler('john McClane'),'McClane john');
    assert.strictEqual(nameShuffler('Mary jeggins'),'jeggins Mary')
    assert.strictEqual(nameShuffler('tom jerry'),'jerry tom')
  //first lets split it with the delimiter of whitespace then use indexing to swap position.//? reverse was easier


//   Your goal is to return multiplication table for number that is always an integer from 1 to 10.

//   For example, a multiplication table (string) for number == 5 looks like below:
  
//   1 * 5 = 5
//   2 * 5 = 10
//   3 * 5 = 15
//   4 * 5 = 20
//   5 * 5 = 25
//   6 * 5 = 30
//   7 * 5 = 35
//   8 * 5 = 40
//   9 * 5 = 45
//   10 * 5 = 50
//   P. S. You can use \n in string to jump to the next line.
  
//   Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.  

function multiTable(number) {
    let numArr = []
    for (let i = 1; i <= 10; i++) {
        numArr.push(`${i} + ${number} = ${i * number}`)
    }
    return numArr.join('\n')
  }
  console.log(multiTable(5))
//input will be a num
//output will be multiplication table with lines corresponding to the argument
// assert.strictEqual(multiTable(5), '1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50');
// assert.strictEqual(multiTable(1), '1 * 1 = 1\n2 * 1 = 2\n3 * 1 = 3\n4 * 1 = 4\n5 * 1 = 5\n6 * 1 = 6\n7 * 1 = 7\n8 * 1 = 8\n9 * 1 = 9\n10 * 1 = 10');
//create a var that will use template literals holding original structure then using a for loop to increment. Finally join('\n') new line