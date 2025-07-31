// Given a string, you need to write a method that order every letter in this string in ascending order.

// Also, you should validate that the given string is not empty or null. If so, the method should return:

// "Invalid String!"
// Notes
// • the given string can be lowercase and uppercase.
// • the string could include spaces or other special characters like '# ! or ,'. Sort them based on their ASCII codes
// Examples
// "hello world" => " dehllloorw"
// "bobby"       => "bbboy"
// ""            => "Invalid String!"
// "!Hi You!"    => " !!HYiou"

const assert = require('assert')

function orderWord(s){
  if (s == '' || s == null) {
    return "Invalid String!"
  } 
    
  return s.split('').sort().join('')
}
console.log(orderWord("Hello, World!"))

// Input is a string.
// Output is a sorted string.
    assert.strictEqual(orderWord("Hello, World!"), " !,HWdellloor");
    assert.strictEqual(orderWord("bobby"), "bbboy");
    assert.strictEqual(orderWord("b"), "b");
    assert.strictEqual(orderWord(""), "Invalid String!");
    assert.strictEqual(orderWord("completesolution"), "ceeillmnooopsttu");
    assert.strictEqual(orderWord("\"][@!$*(^&%"), "!\"$%&(*@[]^");
    assert.strictEqual(orderWord("i\"d][@z!$r(^a&world%"),"!\"$%&(@[]^addilorrwz");
    assert.strictEqual(orderWord(null),"Invalid String!");
    assert.strictEqual(orderWord("cba"),"abc");
    assert.strictEqual(orderWord("abc"),"abc");
// if else for empty or null to return "Invalid String!". Then return split sort and join.