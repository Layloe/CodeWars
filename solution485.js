// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

function consonantCount(str) {
    return str.split('').filter(item => !'aeiouAEIOU'.includes(item)).length  }
  console.log(consonantCount('aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#'))

  // Input is a string of letters
  // Output is a number of letters not including vowels
  // 
  // Split filter out aeiou then use length 