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

//? Prameters: an arr of mixed retrun results from a boolean

//? Return: a sum/number that counts the number of truthy statments

//? Example:
// assert.strictEqual(countSheeps([undefined,null,false,true]), 1),
// assert.strictEqual(countSheeps([undefined,null,false,true,true,false,null,undefined]), 2),
// assert.strictEqual(countSheeps([true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true]), 17)

//? Psuedocode: declare a variable with condtionals to make [], null, undefinded = 0. filter all sheep .length

const assert = require('assert')

function countSheeps(sheep) {
    const filterSheep = sheep.filter(item => item == true).length
        
    if (sheep == []){
        return 0
    }
    if (sheep == undefined){
        return 0
    }
    if (sheep == null){
            return 0
    }

    return filterSheep
  }

  console.log(countSheeps([undefined,null,false,true,true,false,null,undefined]))

//   [[], 0],
//   [[undefined], 0],
//   [[null], 0],
//   [[false], 0],
//   [[true], 1],
assert.strictEqual(countSheeps([undefined,null,false,true]), 1),
assert.strictEqual(countSheeps([undefined,null,false,true,true,false,null,undefined]), 2),
assert.strictEqual(countSheeps([true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true]), 17)
