//! P.R.E.P practice

// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

//Parametrs: Takes in a number and converts into a string.

//Return: A number converted into a string

//Examples:
// assert.strictEqual(numberToString(67), '67');

//Psudocode: find the string method that solves the problem

function numberToString(num) {
    console.log(num.toString())
  }

  numberToString(2121)

  //? ------------------------------------------------------------------------------------ 


//   Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

//Parameters: Takes in a string and outputs a reversed string

//Return: Returns a reversed string.

//Examples:
// assert.strictEqual(solution('world'), 'dlrow');
// assert.strictEqual(solution('hello'), 'olleh');
// assert.strictEqual(solution(''), '');
// assert.strictEqual(solution('h'), 'h');

//Psudocode:Find the string methods that works best, I'm going to first split() the string, then reverse() the string, and finally join() the string.


function solution(str){
    console.log(str.split('').reverse().join(''))
  
}

solution('kappa')

//?----------------------------------------------------------------------------------------------

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

//Parameters: Takes in a number(n) and a string(s) and repeats the string the same number of times as the integer(num) bieng passed into it

//Return: A string that is repeated X number of times as the integer bieng passed into it.


//Example:
  //     Test.assertSimilar(repeatStr(3, "*"), "***");
  //     Test.assertSimilar(repeatStr(5, "#"), "#####");
  //     Test.assertSimilar(repeatStr(2, "ha "), "ha ha ");

//Psudocode: Use the method repeat() and mutiply the a number(n) through it.




function repeatStr (n, s) {
  console.log(s.repeat(n))
}

repeatStr(21,'cat')

//?--------------------------------------------------------------------------------------------------


// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
 
//Parameters: Remove the first and last letter of the original string

//Return: A string with first and last letter removed

//Example: 
// assert.strictEqual(removeChar('eloquent'), 'loquen');
// assert.strictEqual(removeChar('country'), 'ountr');
// assert.strictEqual(removeChar('person'), 'erso');
// assert.strictEqual(removeChar('place'), 'lac');
// assert.strictEqual(removeChar('ooopsss'), 'oopss');

//Psudocode: Use the string method slice() and pass through the locations of the string


function removeChar(str){
  console.log(str.slice(1,-1))
 
 };
 
 removeChar('Kappa')


 //?-------------------------------------------------------------------------------------------------

//  Simple, remove the spaces from the string, then return the resultant string.

//Parameters: Remove all spaces from the string

//Return: Return a string that doesn't have any spaces

//Examples:
// assert.strictEqual(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
// assert.strictEqual(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd'); 
// assert.strictEqual(noSpace('8aaaaa dddd r     '), '8aaaaaddddr'); 

//Psudocode: Use the method replaceAll(' ','') 

function noSpace(x){

  console.log(x.replaceAll(' ',''))

}


noSpace(' Carry these logs')

//?----------------------------------------------------------------------------------------------------

// Note: This kata is inspired by Convert a Number to a String!. Try that one too.

// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

//Parameters: Input a string of numbers and out put integers(real numbers)

//Return: Integers

//Examples:
// Test.assertEquals(stringToNumber("1234"),1234)
// Test.assertEquals(stringToNumber("605"), 605)
// Test.assertEquals(stringToNumber("1405"),1405)
// Test.assertEquals(stringToNumber("-7"),  -7)

//Psuedocode: Use method Number to change string of numbers to integers, in this case the easiest way was str*1

// const stringToNumber = function(str){
//   // put your code here
//   return null;

  function stringToNumber(str) {

// let str = str.Math.floor()

    console.log(str*1)

      }

stringToNumber('1234')


//?---------------------------------------------------------------------------------------------------

// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// // [Make sure you type the exact thing I wrote or the program may not execute properly]
//Parameters: Take in a string(greeting) and injects the persons(name) into the string with template litterls

//Return: A greeting statment with the (name) put into the string

//Examples:
// assert.strictEqual(greet("Ryan"), "Hello, Ryan how are you doing today?");
// assert.strictEqual(greet("Shingles"), "Hello, Shingles how are you doing today?");

//Psuedocode: USe template literals ${name} on the console.log



function greet(name){

  console.log(`Hello, ${name} how are you doing today?`)

}

greet('Carl Sagan')

//?-------------------------------------------------------------------------------------------------------

// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

//Parameters: Takes in a boolean (b)

//Return: The boolean as a converted string 

//Example:
// Test.assertEquals(booleanToString(true), "true", 'When we pass in true, we want the string "true" as output');
// Test.assertEquals(booleanToString(false), "false", 'When we pass in false, we want the string "false" as output');



//Psuedocode: Use method toString()



function booleanToString(b){
  
    console.log(b.toString())
  
}

booleanToString(true)

//?------------------------------------------------------------------------------------------------------

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

//Parameters: Take in a string that a first and last name then seperates intitals and input a dot'.' between the two initials

//Return: Return two capital letters; the initials of the first and last name with a dot'.' between them

//Example:
  //     assert.strictEqual(abbrevName("Sam Harris"), "S.H");
  //     assert.strictEqual(abbrevName("Patrick Feenan"), "P.F");
  //     assert.strictEqual(abbrevName("Evan Cole"), "E.C");
  //     assert.strictEqual(abbrevName("P Favuzzi"), "P.F");
  //     assert.strictEqual(abbrevName("David Mendieta"), "D.M");

//Psuedocode: Use the method slit(), and then map through to find input location of the string. Finally join(".") it all together.

function abbrevName(name){

  console.log(name.split(" ").map((n)=>n[0]).join("."))

}

abbrevName('Carl Sagan')

//?-----------------------------------------------------------------------------------------------------

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

//Parameters: Find the letter "R" or lowercase "r" in the (name) parameter that getting passed through it.

//Return: The argument (name) + "playes banjo" or
        //The argument (name) + "does not play the banjo"

//Example:
// assert.strictEqual(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
//     assert.strictEqual(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
//     assert.strictEqual(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
//     assert.strictEqual(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
//     assert.strictEqual(areYouPlayingBanjo("rolf"), "rolf plays banjo");

//Psuedocode: Use template literals for the insertion of the parameter(name) and locate in postion in the sting[0]. Then use if else statment to find if the (name) contain upper or lowercase 'r'&&'R'



function areYouPlayingBanjo(name) {
  if (name[0].includes('R')) {
  console.log(`${name} plays banjo`)

  }else if(name[0].includes('r')) {
    console.log(`${name} plays the banjo`)

  }else{
    console.log(`${name} does not play the banjo`)
  }
}

areYouPlayingBanjo('Carl')

//?--------------------------------------------------------------------------------------------------

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

//Parameters: Takes in a string of numbers(x)

//Return: A string with the numbers; any number lesser then '5' is coverted to '0' and numbers greater then 5 are converted to a '1'

//Example:
  //     assert.strictEqual(fakeBin('45385593107843568'), '01011110001100111');
  //     assert.strictEqual(fakeBin('509321967506747'), '101000111101101'); 
  //     assert.strictEqual(fakeBin('366058562030849490134388085'), '011011110000101010000011011');

//Psuedocode: Use a for loop,

// function fakeBin(x){
//   for (let i = 0; i < x.length; i++) {
//     x[x.length] = i.toString()+"0"
//   //   if (x * 1 >= 5 ) {
//   //     console.log(x.toString())
//   //   }
    
//   // }

// } //Come back to this one

// fakeBin('45385593107843568')

//?-------------------------------------------------------------------------------------------------------

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

//Parameters: An array contains a value(a) and also checks boolean value(x)

//Return: a boolean

//Example:
// assert.strictEqual(check([66, 101], 66), true);
// assert.strictEqual(check([101, 45, 75, 105, 99, 107], 107), true);
// assert.strictEqual(check(['t', 'e', 's', 't'], 'e'), true);
// assert.strictEqual(check(['what', 'a', 'great', 'kata'], 'kat'), false);

//Psuedocode: Use if else and use method includes() with temprate literals

function check(a, x) {
  console.log(a.filter((word,index,arr) => {
    a.includes()
  })
}

check(([66, 101], 66))