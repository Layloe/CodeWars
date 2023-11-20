// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 

// Parameters: an arr of  3 intergers

// Return:the sum from the differences between consecutive pairs in the array in descending order

// Example:
// [2, 1, 10]  -->  9

// Psuedocode: sort, loop, conditionals with mafs


function sumOfDifferences(arr) {
    const sortArr = arr.sort((a,b) => b - a)
    const [index0,index1,index2] = sortArr
 
    const sum = index0 - index1 + index1 - index2

  // arr[index0] - arr[index1] + arr[index1] - arr[index2] = sum
    // sum + arr[index2]
    

    
    return sum

}

console.log(sumOfDifferences([-3, -2, -1]))