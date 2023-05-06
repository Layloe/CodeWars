// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// Parameters: takes a single string (word) as argument

// Return: an ordered list containing the indexes of all capital letters in the string

// Example:
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// Psuedocode: Varibale to store capitol letters then filter and return index

//? Called time... way off on this one.

var capitals = function (word) {
    var caps = [];
      for(var i = 0; i < word.length; i++) {
      if(word[i].toUpperCase() == word[i]) caps.push(i);
    }
    return caps;
  };

//  function capitals (word) {
// 	let alph = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'.split(' ').filter((value, index) => value.length)
//     console.log(alph)
//     return word
 
console.log(capitals('CodEWaRs'))
