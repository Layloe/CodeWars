// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 
    
// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'
// Array's length > 2.
const assert = require('assert')
function toCsvText(array) {
    return array.join('\n')
 }
 console.log(toCsvText([
        [ 0, 1, 2, 3, 4 ],
        [ 10,11,12,13,14 ],
        [ 20,21,22,23,24 ],
        [ 30,31,32,33,34 ]] 
    ))
    //input is going to be a nested arr containing numbers
    //output will be CSV comma separated value 
assert.strictEqual(toCsvText([
        [ 0, 1, 2, 3, 45 ],
        [ 10,11,12,13,14 ],
        [ 20,21,22,23,24 ],
        [ 30,31,32,33,34 ]
       ] ), '0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34');
assert.strictEqual(toCsvText([
        [ -25, 21, 2, -33, 48 ],
        [ 30,31,-32,33,-34 ]
       ] ), '-25,21,2,-33,48\n30,31,-32,33,-34');
assert.strictEqual(toCsvText([
        [ 5,55,5,5,55 ],
        [ 6,6,66,23,24 ],
        [ 666,31,66,33,7 ]
       ] ), '5,55,5,5,55\n6,6,66,23,24\n666,31,66,33,7');

    //use method join with '\n' is delimiter




//     You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1 (allways 2 for Java).

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).
function billboard(name, price = 30){
    // const nameSum = name.split('').length
    // return nameSum * price
    let sum = 0 
    for (let i = 0; i < name.length; i++) {
        sum += price
    }
    // const nameSum = name.split('').reduce((acc, curr ) => acc + price, 0)
    // return nameSum
    return sum
  } 
  console.log(billboard('Kobe Bryant'))
  //input is going to be string/name 
  //output will be number/sum
  assert.strictEqual(billboard("Jeong-Ho Aristotelis"), 600);
  assert.strictEqual(billboard("Abishai Charalampos"), 570);
  assert.strictEqual(billboard("Idwal Augustin"), 420);
  assert.strictEqual(billboard("Hadufuns John",20), 260);
  assert.strictEqual(billboard("Zoroaster Donnchadh"), 570);
  assert.strictEqual(billboard("Claude Miljenko"), 450);
  assert.strictEqual(billboard("Werner Vígi",15), 165);
  assert.strictEqual(billboard("Anani Fridumar"), 420);
  assert.strictEqual(billboard("Paolo Oli"), 270);
  assert.strictEqual(billboard("Hjalmar Liupold",40), 600);
  assert.strictEqual(billboard("Simon Eadwulf"), 390);
  //first decare a variable to split str then get the length then * that by price = 30