// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// "312" should return "333122"
// "102269" should return "12222666666999999999"

function explode(s) {
    const repeatItem = s.split('').map((item) => {
        return item.repeat(item)
    })
  return repeatItem.join('')
}
console.log(explode("312"))
// Input is a string of numbers.
// Output is a string of numbers where each digit is repeated a number if times equals to its value,
    // ["312", "333122"],
    // ["102269", "12222666666999999999"],
    // ["0", ""],
    // ["000", ""],
    // ["123", "122333"]
// Create a variable that will hold results.
// Split and map item repeat item by itself then join.