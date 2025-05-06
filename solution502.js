// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

// Note: the input will not be empty.

// Examples
// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"

function calculate(str) {

    return String(eval(str.split('plus').join('+').split('minus').join('-')))
}
console.log(calculate('1plus2plus3minus4'))
// Input is a string of numbers separated by an operator word.
// Output is string that is a sum if the argument.
    // assert.assertEquals(calculate("1plus2plus3plus4"), '10');
    // assert.assertEquals(calculate('1minus2minus3minus4'), '-8');
	// assert.assertEquals(calculate('1plus2plus3minus4'), '2');
// Use if else to replace all words 'minus' 'plus' 'divide' 'multiply' then use the method eval to get sum.