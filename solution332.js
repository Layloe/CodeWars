// Our counter prototype is broken. Can you spot, what's wrong here?

//? Parameters: debug

//? Return: 

//? Example:

//? Pseudocode: debug constructor

// const assert = require('assert')

 function Counter() {
    this.value = 0
  }
  
  Counter.prototype.increase = function() {
     this.value++
  };
  
  Counter.prototype.getValue = function() {
    return this.value;
  };
  
  Counter.prototype.reset = function() {
    this.value = 0;
  };
  console.log(Counter())

//   assert.assertEquals(counter.getValue(), 0, 'Initial counter value must be 0');
//   assert.assertEquals(counter.getValue(), 1, 'Counter value must be increased');
//   assert.assertEquals(counter.getValue(), 0, 'Counter value must be 0 after reset');