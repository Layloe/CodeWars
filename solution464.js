// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
// See test cases for more examples.

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

// Good luck!

// If you like this Kata, please try:

function solve(arr){  
    let count = 0
    alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    

  };
  console.log(solve(["abode","ABc","xyzD"]))
  // Input will be an array if strings or letters
  // Output is the position 
//   assert.deepEqual(solve(["abode","ABc","xyzD"]),[4,3,1]);
//   assert.deepEqual(solve(["abide","ABc","xyz"]),[4,3,0]);
//   assert.deepEqual(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]),[6, 5, 7]);
//   assert.deepEqual(solve(["encode","abc","xyzD","ABmD"]),[1, 3, 1, 3]);
// Use a hashmap to count we also need the alphabet arr