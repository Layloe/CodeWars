// Tea for two!

// Given a string or number write a function tea42 that takes as input a string or number and returns a string where every '2' charcter or digit has been replaced with a t.

// tea42('coffee') //should return 'coffee'
// tea42('tea') //should return 'tea'
// tea42('2ea') //should return 'tea'
// tea42(9022) //should return '90tt'
// tea42(5676765) //should return '5676765'
// tea42('2u2u') //should return 'tutu'
// const assert = require('assert')

function tea42(input) {

  return String(input.replaceAll('2', 't'))
}
console.log(tea42(102))

// Input is a string or num.
// Output is a string with every '2' is replaced with a assert

// assert.assertEquals(tea42(2), 't', 'Twos you lose!') 
// assert.assertEquals(tea42('2'), 't', 'Twos you lose!')
// assert.assertEquals(tea42(102), '10t', 'Twos you lose!')
// assert.assertEquals(tea42('m2'),'mt', 'Twos you lose!')
// assert.assertEquals(tea42('pre2ty'),'pretty', 'Twos you lose!')

// Use replaceAll 