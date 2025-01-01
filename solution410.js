// Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.

// To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number().
function add(a, b){
	return a == b
}
console.log(add('1', 1))
//input will be two parameters with one being a str and the other being a number
//output a boolean
// use the '=='

// Your task is to create a change machine.

// The machine accepts a single coins or notes, and returns change in 20p and 10p coins. The machine will try to avoid returning its exact input, but will otherwise return as few coins as possible. For example, a 50p piece should become two 20p pieces and one 10p piece, but a 20p piece should become two 10p pieces.

// The machine can exclusively process these coins and notes: £5, £2, £1, 50p, 20p. Any coins and notes which are not accepted by the machine will be returned unprocessed. For example, if you were to put a £20 note into the machine, it would be returned to you and not broken into change. (Note that £1 is worth 100p.)

// This change machine is programmed to accept and distribute strings rather than numbers. The input will be a string containing the coin or note to be processed, and the change should be returned as one string with the coin names separated by single spaces with no commas. The values of the string should be in descending order. For example, an input of "50p" should yield the exact string "20p 20p 10p".

function changeMe(moneyIn){
    const moneyLogic = {
        '£5' : '£2 £2 £1',
        '£2' : '£1 £1',
        '£1' : '50p 50p',
       '50p' : '20p 20p 10p',
       '20p' : '10p 10p'
    }
    return moneyLogic[moneyIn]
  }
  console.log(changeMe('£5'))
  //input is going to be a string with euro money symbol
  //output will be a string 
    // assert.strictEqual(actual, "20p 20p 20p 20p 20p");
    // assert.strictEqual(changeMe("Money"), "Money");
  // use conditionals and money change numbers


//   Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]
var capitals = function (word) {
  let capitalIndexes = []
  //  const findCapitals = word.split('')
  // for (const curr of word) {
  //   if (word[curr] == word[curr.toUpperCase()]) {
  //   capitalIndexes.push(curr)
  //   }
  // }
  // return findCapitals

  for(let i = 0; i < word.length; i++) {
    if(word[i].toUpperCase() == word[i]) capitalIndexes.push(i);
  }
  return capitalIndexes

    //  const findCapitals = word
    //  .split('')
    //  .map((item, index, arr) => item == item.toUpperCase() ? index : null)

    //  return findCapitals.join('').split('').map(Number)
}    
console.log(capitals('codeWarssssss'))
//input is going to be a string that contains lower and upper case letters
//output will be an array of numbers
// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]
// split then loop thru arr and use index