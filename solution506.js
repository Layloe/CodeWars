// One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.

// Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):

// instead of including i or I put the number 1 in the password;
// instead of including o or O put the number 0 in the password;
// instead of including s or S put the number 5 in the password.
// Examples:
// "Give me liberty or give me death"  --> "Gml0gmd"
// "Keep Calm and Carry On"            --> "KCaC0"

function makePassword(phrase) {
    const findFirstChar = phrase.split(' ').map(item => { 
     return   item[0]
    // if (item[0].includes('i') || item[0].includes('I')) {
    //    return item[0].replace('1')
    // }
    // if (item[0].includes('o') || item[0].includes('O')) {
    //    return item[0].replace('0')
    // }
    // if (item[0].includes('s') || item[0].includes('S')) {
    //    return item[0].replace('5')
    // } 
    })

    return findFirstChar 
  }
  console.log(makePassword("Give me liberty or give me death"))

  // Input is a string or sentence.
  // Output is a string with the first letter of each word and 'oOiIsS' swapped to 015
    //   assert.assertEquals(makePassword("Give me liberty or give me death"), "Gml0gmd", "Wrong output for 'Give me liberty or give me death'");
    //   assert.assertEquals(makePassword("Keep Calm and Carry On"), "KCaC0", "Wrong output for 'Keep Calm and Carry On'");
// First split with white space and map then slice[0] then if else to replace letters
