// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// // STRINGSFUNDAMENTALS
// Parameters: Remove first and last characters of a string, string wont be less then two charactors
// Return: a string that has removed first and last charactors
// Examples: 
// assert.strictEqual(removeChar('eloquent'), 'loquen');
//     assert.strictEqual(removeChar('country'), 'ountr');
//     assert.strictEqual(removeChar('person'), 'erso');
//     assert.strictEqual(removeChar('place'), 'lac');
//     assert.strictEqual(removeChar('ooopsss'), 'oopss');
// Psudocode: Slice postions at 1 and -1


function removeChar(str){
  return str.slice(1, -1)
   
   };

   removeChar('meow')

   