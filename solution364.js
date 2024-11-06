// 1. Frequency Counter
// Problem: Given an array of integers, find the frequency of each element and return the results in a dictionary. 

//input is an array of numbers 
//output is an object with key value pairs
// example:
// Input: [1, 2, 2, 3, 3, 3]
// Output: {1: 1, 2: 2, 3: 3}
// use a for of to loop through the variable in the function -> declare an empty obj for the count -> if item is not in countObj var put it there++ else if it is there add 1


function frequencyCount(arrNums) {
   let countObj = {}
   for (const currentItemInLoop of arrNums) {
    if ( countObj[currentItemInLoop] ) {
        countObj[currentItemInLoop]++
    }else {
        countObj[currentItemInLoop]
    }
   }
   return countObj
}
console.log(frequencyCount([1, 2, 2, 3, 3, 3,3,3]))