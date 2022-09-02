// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]
 
//Parameters: return a string that insets any random <name> into the string
//Return: "Hello, <name> how are you doing today?"
//Examples:
// assert.strictEqual(greet("Ryan"), "Hello, Ryan how are you doing today?");
// assert.strictEqual(greet("Shingles"), "Hello, Shingles how are you doing today?");
//Psudocode: Use template litterals to insert a name tht is passed into the function 


function greet(name){
    return (`Hello, ${name} how are you doing today?`)
  }

  greet('Jello')