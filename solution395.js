// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", 'o')  =>  1
// ("Hello", 'l')  =>  2
// ("", 'z')       =>  0
// Notes
// The first argument can be an empty string
// In languages with no distinct character data type, the second argument will be a string of length 1
const assert = require('assert')
function strCount(str, letter){  
    // return str.split('').filter(item => item == letter).length
    let sumLetter = 0
    for (let i = 0; i <= str.length; i++) {
        if ( str[i] == letter) {
            sumLetter += 1
        }
    }
    return sumLetter
    // return str.split(letter).length -1
  }

  console.log(strCount('Helloooo', 'o'))
  //input is going to be two parameters both strings, one is going be a word and the other a char
  //output is going to be a sum of the number of time a char is found in word
  assert.strictEqual(strCount('Hello', 'o'), 1);
  assert.strictEqual(strCount('Hello', 'l'), 2);
  assert.strictEqual(strCount('',      'z'), 0);
// many ways of finding this but I will go with split filter the length and finally join. Might try a hash map too just for fun.


// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.
function count(string) {
    let letterCount = {}
    for (const curr of string) {
        if (letterCount[curr]) {
            letterCount[curr]++
        } 
        else {
            letterCount[curr] = 1
        }
    }
    return letterCount
    // let i = 0; i <= string.length; i++
  }
  console.log(count('ABbbbCC'))
  //input is going to be a string of random letters
  //output should have an object containing the count of the letters key : value
  //('ABC', {'A': 1, 'B': 1, 'C': 1})
  // create an empty obj variable, use a for of loop to create a hashmap add 


