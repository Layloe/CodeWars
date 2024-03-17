// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

// 1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )

//? Prameters: an array of positve and negitive nums

//? Return: the string first? and the non consecutive number 

//? Example:
// const first = firstNonConsecutive([1,2,3,4,6,7,8])
// assert.strictEqual(first, 6)
// })

// it('all sequential', function() {
// const first = firstNonConsecutive([1,2,3,4])
// assert.strictEqual(first, null)
// })

//? Psuedocode: Instructions unclear but going to start by finding the non consecutive number       // Called time, looked at solutions 
//? declare a var that filter() non consecutive number


// function firstNonConsecutive (arr) {
//     // const nonConsecutive = arr.filter(item => item +1 !== item +1 ? item +1 : null)
//     // return nonConsecutive
    
    
// }
function firstNonConsecutive (arr) {
    for (var i = 1; i < arr.length; i++) {
      var cur = arr[i];
      var prev = arr[i-1];
      
      if (cur - prev > 1) {
        return cur;
      }
    }
    return null;
  }
console.log(firstNonConsecutive([1,2,3,4,6,7,8]))

// const first = firstNonConsecutive([1,2,3,4,6,7,8])
// assert.strictEqual(first, 6)
// })

// it('all sequential', function() {
// const first = firstNonConsecutive([1,2,3,4])
// assert.strictEqual(first, null)
// })



