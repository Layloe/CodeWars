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
  