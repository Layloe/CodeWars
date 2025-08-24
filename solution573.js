// You are given a string of words and numbers. Extract the expression including:

// the operator: either addition ("gains") or subtraction ("loses")
// the two numbers that we are operating on
// Return the result of the calculation.

// Notes:

// "loses" and "gains" are the only two words describing operators
// No fruit debts nor bitten apples = The numbers are integers and no negatives
// Examples
// "Panda has 48 apples and loses 4"  -->  44
// "Jerry has 34 apples and gains 6"  -->  40

function calculate(string) {
  const getMafs = string.split(' ').filter(item => Number(item) || 'loses'.includes(item) || 'gains'.includes(item))
  return eval(getMafs.join(' ').replace('loses', "-" ).replace('gains', '+'))
}
console.log(calculate("Panda has 48 apples and loses 4"))
// Input is a string that contains numbers and words.
// Output is a number.
    // Test.assertEquals(calculate("Panda has 48 apples and loses 4"), 44);
    // Test.assertEquals(calculate("Jerry has 34 apples and gains 6"), 40);
// Split filter numbers and words 'loses' and 'gains' then use replace to include '-' or '+' index to subtract or add