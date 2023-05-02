// Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

// If n == 0 return an empty sequence []

// Examples
// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];

//Parameters:a parameter (n)umber and has a index (default=1) 

//Return: the first n element(s) of the sequence

//Example:
// const arr = ['a', 'b', 'c', 'd', 'e'];
// assert.sameOrderedMembers(first([...arr]   ),      ['a']);
// assert.sameOrderedMembers(first([...arr], 2), ['a', 'b']);

//Psuedocode: Use method slice but set (n)um to index 1

//! Need to find more discriptive challenges with better examples

function first(arr, n=1) {

   return arr.splice(0,n)
  }

  console.log(first(['a', 'b', 'c', 'd', 'e'], 2))