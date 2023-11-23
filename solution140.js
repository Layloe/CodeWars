// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.


// Parameters: 2 params each has an arr of nums

// Return: merges two sorted arrays into a single one

// Example:
// assert.deepEqual(mergeArrays([1, 3, 5], [2, 4, 6]), [1, 2, 3, 4, 5, 6]);
// assert.deepEqual(mergeArrays([2, 4, 8], [2, 4, 6]), [2, 4, 6, 8]);

// Psuedocode: declare a variable that will flatten the two arr then sort


function mergeArrays(a, b) {

    const testFlat = a.concat([], b).sort((a,b) => a - b)
    const test = [...new Set(testFlat)]
    
    // 
    return test
  }

  console.log(mergeArrays([1, 3, 5], [2, 4, 6]))
  