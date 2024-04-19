// Task
// Create a method all which takes two params:

// a sequence
// a function 
// and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.

// Example
// all((1, 2, 3, 4, 5), greater_than_9) -> false
// all((1, 2, 3, 4, 5), less_than_9)    -> True

//? Prameters: An array of numbers

//? Return: a boolean depending on conditons

//? Example:
// Test.assertEquals(all([1,2,3,4,5], function(v){return v<9}), true)
// Test.assertEquals(all([1,2,3,4,5], function(v){return v>9}), false)

//? Psuedocode: if array meets equals true 

function all( arr, fun ){                                           //? finish once not sick
    const test = fun(...arr)
    //  arr.forEach(item => item == fun )
    return test
  }
console.log(all([1,2,3,4,5]))

//   Test.assertEquals(all([1,2,3,4,5], function(v){return v<9}), true)
//   Test.assertEquals(all([1,2,3,4,5], function(v){return v>9}), false)