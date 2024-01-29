// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

//? Parameters: a str/letters

//? Return: a str swapped out letters

//? Example:"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z

//? Psuedocode: loop through letters and use conditionals to swap out letters, possible switch statement for fun

function correctPolishLetters (string) {
    let engrishPlz = string.split('')

    engrishPlz.map((item, index, arr) => {
        item === 'ą' ? arr[index] = 'a' : 'aww beans'
        item === 'ć' ? arr[index] = 'c' : 'aww beans'
        item === 'ę' ? arr[index] = 'e' : 'aww beans'
        item === 'ł' ? arr[index] = 'l' : 'aww beans'
        item === 'ń' ? arr[index] = 'n' : 'aww beans'
        item === 'ó' ? arr[index] = 'o' : 'aww beans'
        item === 'ś' ? arr[index] = 's' : 'aww beans'
        item === 'ź' ? arr[index] = 'z' : 'aww beans'
        item === 'ż' ? arr[index] = 'z' : 'aww beans'
    })
    return engrishPlz.join('')

  }

  console.log(correctPolishLetters("Jędrzej Błądziński"))