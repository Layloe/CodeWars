// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

// Parameters: an arr of intergers

// Return: the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// Example:
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

// Psuedocode: loop through the arr, use condtionals or subtract number by it's self

function invert(array) {
    const emptyArr = []
    const test = array.map(element =>  -element ) 
        
    
            
    

    
    return test
 }

 console.log(invert([-1,2,-3,4,-5]))