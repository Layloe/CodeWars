// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


//Parameters: an arr of nums that contains both positive and negative nums

//Return: an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

//Example:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]

// Psuedocode:  reduce/filter methods with conditionals
// first loop
// split + or -
// add


function countPositivesSumNegatives(arrNums) {
    // const addNegyNums = []
    // const countPositiveNums = [] //.length
    if (arrNums === null || arrNums.length === 0) {
        return [] 
     }   
        
    const addNegNums = arrNums.filter((num) => num < 0 )
    const negSum = addNegNums.reduce((sum,curr) => sum + curr, 0)
    const positiveNums = testNum.length
    const testNum = arrNums.filter((num) => num > 0 )


 
        return  [ positiveNums,negSum]
}

console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]))