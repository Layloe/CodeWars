// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

function consonantCount(str) {
    return str.trim().split('').filter(item => 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'.includes(item)).join('').length
  }
  console.log(consonantCount('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'))

  // Input is a string of letters
  // Output is a number of letters not including vowels
  // 
  // Split filter out aeiou then use length 