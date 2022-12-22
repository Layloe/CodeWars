// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

//Parameters: Takes in an array of true, false(booleans)

//Return: Counts the number of true's present in the array

//Example:
    // [true,  true,  true,  false,
    // true,  true,  true,  true ,
    // true,  false, true,  false,
    // true,  false, false, true ,
    // true,  true,  true,  true ,
    // false, false, true,  true ];

//Psuedocode: Use method fiter()




function countSheeps(arrayOfSheep) {
    // if (arrayOfSheep = true) {
    //     return arrayOfSheep.reduce((sum, current) => sum + current, 0)
    // } else {
        
    // }
    return arrayOfSheep.filter(Boolean).length 
    

  }

  console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ]))




//   [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true ];