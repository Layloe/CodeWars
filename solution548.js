// You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.

// Example:

// input:  "stop Making spongebob Memes!"
// output: "StOp mAkInG SpOnGeBoB MeMeS!"

function spongeMeme(sentence) {
  const convert = sentence.split('').map((item, index) => {
    if (index % 2) {
       return item.toLowerCase()
    } else {
       return item.toUpperCase()
    }
  })
  return convert.join('')
}
console.log(spongeMeme("stop Making spongebob Memes!"))
// Input is a string of upper and lowercase chars.
// Output is the same string but the upper and lowercase follows this patters: "StOp mAkInG SpOnGeBoB MeMeS!"
// Example above.
// Split then map, use index % 2 if true item to lower else to upper and join.