// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

function array(string) {
    if (string.split(',').length <= 2 || string === '') {
        return null
    }
    const removeFirstAndLastOfSting = string.split(',').slice(1, -1).join(' ')
    
    return removeFirstAndLastOfSting
  }
  console.log(array('1,2,3'))

//input is going to be a string
//output is a string and the removal of the first and last items of the str. If item length less than 2 return null.
// example '1,2,3,4', '2 3' 
//first I'm going to split the string and then use the method slice to remove first and last items. Conditional if length > 2 return null.

