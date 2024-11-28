// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

function isVow(arr){
    const parseArrayToLetters = arr.map(item => String.fromCharCode(item))
    return parseArrayToLetters.map(item => 'aeiou'.includes(item) == true ? item : map(toNum => String.charCodeAt(toNum)))

    // const arrWithVowels = []
    // const vowels = 'aeiou'
    // for (const curr of arr) {
    //     if ( arrWithVowels[curr]) {
    //         arrWithVowels += arrWithVowels[curr]
    //     }    
    // }
    return arrWithVowels
  }
  console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]))

//input is going to be an array of numbers
//output is going to be a original arr with the string of individual vowels in an array
//101 -> 'e'
//create a var to parse and loop arr then transform arr into str letters. The method should be fromCharCode or charCodeAt. Finally filter out or push vowels.