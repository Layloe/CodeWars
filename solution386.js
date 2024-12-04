// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

const abbrevName = name => name.split(' ').map(item => item.slice(0,1).toUpperCase()).join('.')
// function abbrevName(name){
//     return name.split(' ').map(item => item.slice(0,1)).join('.')
// }
console.log(abbrevName('Kendric Lamar'))
// input will be string/name
//output will be first and last name char separated by .
//first slit str with white space then slice zero index and finally join with '.'


// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
    if (name.charAt(0) == 'R' || name.charAt(0) == 'r') {
        return `${name} plays banjo`
    }
    return `${name} does not play banjo`
  }
  console.log(areYouPlayingBanjo('Adam'))
  //input will be a string/name
  //output will be one of two string with an inserted/changing name
  //   ("Adam"), "Adam does not play banjo")
  //if string starts with char R or r return ' plays banjo' else " does not play banjo" use template literals.
  