// Create a function which accepts one arbitrary string as an argument, and return a string of length 26.

// The objective is to set each of the 26 characters of the output string to either '1' or '0' based on the fact whether the Nth letter of the alphabet is present in the input (independent of its case).

// So if an 'a' or an 'A' appears anywhere in the input string (any number of times), set the first character of the output string to '1', otherwise to '0'. if 'b' or 'B' appears in the string, set the second character to '1', and so on for the rest of the alphabet.

// For instance:

// "a   **&  cZ"  =>  "10100000000000000000000001"
// "aaaaaaa79345675"  =>  "10000000000000000000000000"
// "&%#*"  =>  "00000000000000000000000000"

function change(string){
    const lowerCase = string.toLowerCase()
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const toBinary = alphabet.split('').map(item => {
        return lowerCase.indexOf(item) !== -1 ? 1 : 0
    })

    return toBinary.join('')
  }
  console.log(change("a **&  bZ"))
  // Input is a string of random chars.
  // Output is a string that is made up of 1's ans 0's and with the length of 26.
  // Example above.
  // Create a variable that changes argument to lowercase then get lowercase alphabet and split map then if else to see if item is in the alphabet and return 1 if true else 0