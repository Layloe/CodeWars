// You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1 (allways 2 for Java).

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).

//? Prameters: a string of first and last names

//? Return: a sum depending on how many chars the string has

//? Example:
// Test.assertEquals(billboard("Jeong-Ho Aristotelis"), 600);
// Test.assertEquals(billboard("Abishai Charalampos"), 570);
// Test.assertEquals(billboard("Idwal Augustin"), 420);
// Test.assertEquals(billboard("Hadufuns John",20), 260);
// Test.assertEquals(billboard("Zoroaster Donnchadh"), 570);

//? Psuedocode:name split('')
//? use method reduce()


const assert = require('assert')

const billboard = (name, price=30) => name.split('').reduce((sum,curr) => sum + price, 0)

// function billboard(name, price = 30){
    
//     const nameSum = name.split('').reduce((sum, curr) => sum + price, 0)

//     return nameSum
// } 
console.log(billboard("Jeong-Ho Aristotelis"))

assert.strictEqual(billboard("Jeong-Ho Aristotelis"), 600);
assert.strictEqual(billboard("Abishai Charalampos"), 570);
assert.strictEqual(billboard("Idwal Augustin"), 420);
assert.strictEqual(billboard("Hadufuns John",20), 260);
assert.strictEqual(billboard("Zoroaster Donnchadh"), 570);





