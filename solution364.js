// 1. Frequency Counter
// Problem: Given an array of integers, find the frequency of each element and return the results in a dictionary. 

//input is an array of numbers 
//output is an object with key value pairs
// example:
// Input: [1, 2, 2, 3, 3, 3]
// Output: {1: 1, 2: 2, 3: 3}


function frequencyCount(arrNums) {
   let countObj = {}
   for (const currentItemInLoop of arrNums) {
    if ( countObj[currentItemInLoop] ) {
        countObj[currentItemInLoop]++
    }else {
        countObj[currentItemInLoop] = 1
    }
   }
   return countObj
}
console.log(frequencyCount([1, 2, 2, 3, 3, 3,3,3]))