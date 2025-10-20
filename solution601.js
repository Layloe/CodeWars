// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

// Note: the input will not be empty.

// Examples
// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"

function calculate(str) {
  const getSumPlus = str.split('plus').join('+')
  const getSumMinus = str.split('minus').join('-')
  console.log(getSumPlus)
//   if (str.includes('plus')) {
//     return getSumMinus
//   }
//   if (str.includes('minus')) {
//     return getSumMinus
//   }

  return  parseInt(getSumPlus)// Finish here with number constructor and parseInt
}
console.log(calculate("1plus2plus3plus4"))
// Input is a string.
// Output is a string of a number.
// assert.strictEqual(calculate("1plus2plus3plus4"), '10');
// assert.strictEqual(calculate('1minus2minus3minus4'), '-8');
// assert.strictEqual(calculate('10plus20plus30minus40'), '20');
// Split map replace all plus with '+' and '-' using if else. Use number constructor to change to integer.