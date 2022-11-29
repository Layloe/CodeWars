// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

//Parameters: Take in a string

//Return: a string  that removes the lowercase vowels (a, e, i, o, u )

//Examples:
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

//Psuedosode: Use method split then iterate over array and filter() out all lowercase vowels (a, e, i, o, u )




function shortcut (string) {
  //  let vowels = ["a","e","i","o","u"]
  //  let arr = []

 

  // if (string.includes('')

  // })) {
    
  // } else {
    
  // }

  // function shortcut(string){
  //   return string.replace(/[aeiou]/g,'')
  // }


   console.log (string.split('').filter(string => !'aeiou' .includes(string)).join(''))

   //? Has to call time on this one, I had the psuedocode more or less correct just had to get the filter function correct
  }

  shortcut('kappa')