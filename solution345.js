// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

//? Parameters: a num

//? Return: num/sum

//? Example:
//   assert.strictEqual(litres(2), 1, 'should return 1 litre');

//? Pseudocode: var -> parseInt/Math.floor ->  * .5 -> edge case

const assert = require('assert')

function litres(time) {
    const litresClean = Math.floor(time * 0.5) 

    return litresClean 
  }
  console.log(litres(.5))

  assert.strictEqual(litres(2), 1, 'should return 1 litre');
  assert.strictEqual(litres(1.4), 0, 'should return 0 litres');
  assert.strictEqual(litres(12.3), 6, 'should return 6 litres');
  assert.strictEqual(litres(0.82), 0, 'should return 0 litres');
  assert.strictEqual(litres(11.8), 5, 'should return 5 litres');
  assert.strictEqual(litres(1787), 893, 'should return 893 litres');
  assert.strictEqual(litres(0), 0, 'should return 0 litres');