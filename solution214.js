// Template Strings
// Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
// Task
// Your task is to return the correct string using the Template String Feature.
// Input
// Two Strings, no validation is needed.
// Output
// You must output a string containing the two strings with the word ```' are '```

//? Prameters: two params both strings 

//? Return: both strings in a concatinated with the word 'are'

//? Example:
// assert.strictEqual('Animals', 'Good', 'Animals are Good', 'templateStrings(\'Animals\', \'Good\')')
// assert.strictEqual('You', 'special', 'You are special', 'templateStrings(\'You\', \'special\')')
// assert.strictEqual('lives', 'frozen', 'lives are frozen', 'templateStrings(\'lives\', \'frozen\')')


//? Psuedocode: Use template litterals

var templateStrings = function(noun, adjective) {
    return `${noun} are ${adjective}`
  }
console.log(templateStrings('Animals', 'Good'))

//   assert.strictEqual('Animals', 'Good', 'Animals are Good', 'templateStrings(\'Animals\', \'Good\')')
//   assert.strictEqual('You', 'special', 'You are special', 'templateStrings(\'You\', \'special\')')
//   assert.strictEqual('lives', 'frozen', 'lives are frozen', 'templateStrings(\'lives\', \'frozen\')')


