// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// "312" should return "333122"
// "102269" should return "12222666666999999999"

//? Parameters: a string made of digits [0-9]

//? Return:a string where each digit is repeated a number of times equals to its value

//? Example:
// "312" should return "333122"
// "102269" should return "12222666666999999999"

//? Pseudocode: var split()
//? map()
//? Number()
//? repeat()
//? join()                          

function explode(s) {  //! RAN OUT OF TIME, return and start at repeat()
    const splitStrToNum = s.split('').map((item, index) =>   item.repeat( Number(item),index))
    // const repeatChar =    s.split('').map((item, index) => index.repeat(item, splitStrToNum))
 
    return splitStrToNum
} 
  console.log(explode("312"))

  // "312" should return "333122"
// "102269" should return "12222666666999999999"