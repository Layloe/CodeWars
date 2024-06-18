// Switch/Case - Bug Fixing #6
// Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?

//? Parameters: two values as nums

//? Return: a working switch case that returns a num

//? Example:
//   Test.assertEquals(evalObject({a:1,b:1,operation:'+'}), 2, 'Return the evaluated string as a number!')

//? Pseudocode: debug: add breaks; rearrange case values

const assert = require('assert')

function evalObject(value){
    var result = 0;
    switch(value.operation){
      case'+': result = value.a + value.b;
        break
      case'-': result = value.a - value.b;
        break
      case'/': result = value.a / value.b;
        break
      case'*': result = value.a * value.b;
        break
      case'%': result = value.a % value.b;
        break
      case'^': result = Math.pow(value.a, value.b);
    }
    return result;
  }
  console.log(evalObject({a:1,b:1,operation:'+'}))

 assert.strictEqual(evalObject({a:1,b:1,operation:'+'}), 2, 'Return the evaluated string as a number!');
 assert.strictEqual(evalObject({a:1,b:1,operation:'-'}), 0, 'Return the evaluated string as a number!');
 assert.strictEqual(evalObject({a:1,b:1,operation:'/'}), 1, 'Return the evaluated string as a number!');
 assert.strictEqual(evalObject({a:1,b:1,operation:'*'}), 1, 'Return the evaluated string as a number!');
 assert.strictEqual(evalObject({a:1,b:1,operation:'%'}), 0, 'Return the evaluated string as a number!');
 assert.strictEqual(evalObject({a:1,b:1,operation:'^'}), 1, 'Return the evaluated string as a number!');