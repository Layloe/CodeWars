// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

//Parameters: A string that is case sensitive 

//Return: A string that is case sensitive an is repeated once

//Example:




//Psuedocode:

const assert = require('assert')

function doubleChar(str) {
      let arr = []
      for (let i = 0; i < str.length; i++) {
        let letter = str[i]
        console.log(letter)
        arr.push(letter.repeat(2))
        console.log(arr)

      }


      return arr.join('')
    // console.log(str.repeat('2').arr.push())


    // console.log ([...str].map(s => s.repeat(2)).join(''))

  }

  doubleChar("Adidas")

  assert.strictEqual(doubleChar("abcd"), "aabbccdd");
  assert.strictEqual(doubleChar("Adidas"), "AAddiiddaass");
  assert.strictEqual(doubleChar("1337"), "11333377");
  assert.strictEqual(doubleChar("illuminati"), "iilllluummiinnaattii");
  assert.strictEqual(doubleChar("123456"), "112233445566");
  assert.strictEqual(doubleChar("%^&*("), "%%^^&&**((");
  