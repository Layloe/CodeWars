// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

//Perameters: Input a string with a mix of upper and lower case letters

//Return: A boolean of true if all letters in the string are uppercase or return a boolean of false if string includes a char of lowercase.

//Example:
// assert.property("", "isUpperCase", 'Must define the prototype isUpperCase')
// assert.strictEqual('c'.isUpperCase(), false, 'c is not upper case');
// assert.strictEqual('C'.isUpperCase(), true, 'C is upper case');
// assert.strictEqual('hello I AM DONALD'.isUpperCase(), false, 'hello I AM DONALD not is upper case');
// assert.strictEqual('HELLO I AM DONALD'.isUpperCase(), true, 'HELLO I AM DONALD is upper case');
// assert.strictEqual('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase(), false, 'ACSKLDFJSgSKLDFJSKLDFJ not is upper case');
// assert.strictEqual('ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase(), true, 'ACSKLDFJSGSKLDFJSKLDFJ is upper case');

// assert.strictEqual('Hello World'.isUpperCase(), false, 'Hello World is not upper case');
//     assert.strictEqual('hello world'.isUpperCase(), false, 'hello world is not upper case');
//     assert.strictEqual('Hello world'.isUpperCase(), false, 'Hello world is not upper case');
//     assert.strictEqual('hello World'.isUpperCase(), false, 'hello World is not upper case');
//     assert.strictEqual('HELLO WORLD'.isUpperCase(), true, 'HELLO WORLD is upper case');
//     assert.strictEqual('Bob walks his dog every day.'.isUpperCase(), false, 'Bob walks his dog every day. is not upper case');
//     assert.strictEqual('BOB walks his dog every day.'.isUpperCase(), false, 'BOB walks his dog every day. is not upper case');
//     assert.strictEqual('BOB WALKS HIS DOG EVERY DAY.'.isUpperCase(), true, 'BOB WALKS HIS DOG EVERY DAY. is upper case');
//     assert.strictEqual('BOB WALKs HIS DOG EVERY DAY.'.isUpperCase(), false, 'BOB WALKs HIS DOG EVERY DAY. is not upper case');
//     assert.strictEqual('#lovewins'.isUpperCase(), false, '#lovewins is not upper case');
//     assert.strictEqual('#Lovewins'.isUpperCase(), false, '#Lovewins is not upper case');
//     assert.strictEqual('#loveWins'.isUpperCase(), false, '#loveWins is not upper case');
//     assert.strictEqual('#LoveWins'.isUpperCase(), false, '#LoveWins is not upper case');
//     assert.strictEqual('#LOVEWins'.isUpperCase(), false, '#LOVEWins is not upper case');
//     assert.strictEqual('#LoveWINS'.isUpperCase(), false, '#LoveWINS is not upper case');
//     assert.strictEqual('#LOVEWINs'.isUpperCase(), false, '#LOVEWINs is not upper case');
//     assert.strictEqual('#lOVEWINS'.isUpperCase(), false, '#lOVEWINS is not upper case');
//     assert.strictEqual('#LOVEWINS'.isUpperCase(), true, '#LOVEWINS is upper case');


//Psuedocode: Create an if else statement that will loop through the string and check if it includes upper or lower case and return a boolean with the string 'is upper case' if true and 'is not upper case' if false.

// function isUpperCase(str) {
//     let arr = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
//     // let str = '' 
//     for (let i = 0; i < str.length; i++ ) {
//         str.includes(0,'abcdefghijklmnopqrstuvwxyz') {
//             console.log(`${str} is not upper case`)
//         }

//      }


//   }
//   isUpperCase('Hello world')
// const assert = require('assert') 

//? Used the wrong methods, need to review

 String.prototype.isUpperCase = function() {
  return this.toUpperCase() === this.toString();
}

isUpperCase('Testing')



    // assert.property("", "isUpperCase", 'Must define the prototype isUpperCase')
    // assert.strictEqual('c'.isUpperCase(), false, 'c is not upper case');
    // assert.strictEqual('C'.isUpperCase(), true, 'C is upper case');
    // assert.strictEqual('hello I AM DONALD'.isUpperCase(), false, 'hello I AM DONALD not is upper case');
    // assert.strictEqual('HELLO I AM DONALD'.isUpperCase(), true, 'HELLO I AM DONALD is upper case');
    // assert.strictEqual('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase(), false, 'ACSKLDFJSgSKLDFJSKLDFJ not is upper case');
    // assert.strictEqual('ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase(), true, 'ACSKLDFJSGSKLDFJSKLDFJ is upper case');

    // assert.strictEqual('Hello World'.isUpperCase(), false, 'Hello World is not upper case');
    // assert.strictEqual('hello world'.isUpperCase(), false, 'hello world is not upper case');
    // assert.strictEqual('Hello world'.isUpperCase(), false, 'Hello world is not upper case');
    // assert.strictEqual('hello World'.isUpperCase(), false, 'hello World is not upper case');
    // assert.strictEqual('HELLO WORLD'.isUpperCase(), true, 'HELLO WORLD is upper case');
    // assert.strictEqual('Bob walks his dog every day.'.isUpperCase(), false, 'Bob walks his dog every day. is not upper case');
    // assert.strictEqual('BOB walks his dog every day.'.isUpperCase(), false, 'BOB walks his dog every day. is not upper case');
    // assert.strictEqual('BOB WALKS HIS DOG EVERY DAY.'.isUpperCase(), true, 'BOB WALKS HIS DOG EVERY DAY. is upper case');
    // assert.strictEqual('BOB WALKs HIS DOG EVERY DAY.'.isUpperCase(), false, 'BOB WALKs HIS DOG EVERY DAY. is not upper case');
    // assert.strictEqual('#lovewins'.isUpperCase(), false, '#lovewins is not upper case');
    // assert.strictEqual('#Lovewins'.isUpperCase(), false, '#Lovewins is not upper case');
    // assert.strictEqual('#loveWins'.isUpperCase(), false, '#loveWins is not upper case');
    // assert.strictEqual('#LoveWins'.isUpperCase(), false, '#LoveWins is not upper case');
    // assert.strictEqual('#LOVEWins'.isUpperCase(), false, '#LOVEWins is not upper case');
    // assert.strictEqual('#LoveWINS'.isUpperCase(), false, '#LoveWINS is not upper case');
    // assert.strictEqual('#LOVEWINs'.isUpperCase(), false, '#LOVEWINs is not upper case');
    // assert.strictEqual('#lOVEWINS'.isUpperCase(), false, '#lOVEWINS is not upper case');
    // assert.strictEqual('#LOVEWINS'.isUpperCase(), true, '#LOVEWINS is upper case');