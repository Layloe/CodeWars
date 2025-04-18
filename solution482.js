// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.
const assert = require('assert')

function swap (string) {
    const vowels = 'aeiou'
    // const capVowel = string.split('').map(item => vowels.includes(item) ? item.toUpperCase() : item).join('')
    const vowelsToUpperCase = string.split('').map(item => {
        if (vowels.includes(item)) {
            return item.toUpperCase()
        } 
        if (!vowels.includes(item)) {
            return item
        }
        })

    return vowelsToUpperCase.join('')   
  }
  console.log(swap("HelloWorld!"))

  // Input will be a string if letters or words
  // Output is the original string with vowels capitalized
//         assert.strictEqual("", "");
// 		assert.strictEqual("   @@@", "   @@@");
// 		assert.strictEqual("HelloWorld!", "HEllOWOrld!");
// 		assert.strictEqual("Sunday", "SUndAy");
// 		assert.strictEqual("Codewars", "COdEwArs");
// 		assert.strictEqual("Monday", "MOndAy");
// 		assert.strictEqual("Friday", "FrIdAy");
// 		assert.strictEqual("abracadabra", "AbrAcAdAbrA");
// 		assert.strictEqual("AbrAcAdAbrA", "AbrAcAdAbrA");
// 		assert.strictEqual("ABRACADABRA", "ABRACADABRA");
// 		assert.strictEqual("aBRaCaDaBRa", "ABRACADABRA");
  // Create a variable that will hold vowels then split then map use conditionals to see if vowels are included in argument if do toupper then else item. 


