// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

//? Parameters: one or more strings

//? Return: a str

//? Example:
//   assert.strictEqual(buildString('Cheese','Milk','Chocolate'), 'I like Cheese, Milk, Chocolate!', 'Return the correct String');

//? Pseudocode: debug 
//template literals

const assert = require('assert')

function buildString(...template){
    return `I like ${template.join(', ')}!`;
  }
console.log(buildString('Cheese','Milk','Chocolate'))

  assert.strictEqual(buildString('Cheese','Milk','Chocolate'), 'I like Cheese, Milk, Chocolate!', 'Return the correct String');
  assert.strictEqual(buildString('Cheese','Milk'), 'I like Cheese, Milk!', 'Return the correct String');
  assert.strictEqual(buildString('Chocolate'), 'I like Chocolate!', 'Return the correct String');