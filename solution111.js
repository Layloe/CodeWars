// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

//Parameters: a str

//Return:an Array/list with the length of each word added to each element .

//Example:
// assert.isDefined(actual, "You need to return an array. Did you log to the console instead?");
// assert.deepEqual(actual, ["apple 5", "ban 3"]);
//Psuedocode:


function addLength(str) {               //! Forgot that I already did this one, oof
    
    return str.split(' ').map(value => `${value} ${value.length}`)

    }


console.log(addLength(''))
    // assert.isDefined(actual, "You need to return an array. Did you log to the console instead?");
    // assert.deepEqual(actual, ["apple 5", "ban 3"]);