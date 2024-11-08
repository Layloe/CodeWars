// 7. Check for Duplicates
// Problem: Given an array of integers, return true if any value appears at least twice in the array. Return false if every element is distinct. Example:
// Input: [1, 2, 3, 1]
// Output: True

function checkForDupes(arrNums) {
    let countObj = {}
    for (const currentItemInLoop of arrNums) {
        if (countObj[currentItemInLoop]) {
            return true
            // countObj[currentItemInLoop]++
        } else {
            countObj[currentItemInLoop] = true
            // countObj[currentItemInLoop] = 1 && !countObj[currentItemInLoop] <= 1
            
        }
    }
    return false
    // countObj
}
// console.log(checkForDupes([1, 2, 3, 1]))

// function containsDupes(arr){
//     const numsMap = {}
//     for(num of arr){
//       if(numsMap[num]){
//         return true
//       }else{
//         numsMap[num] = true
//       }
//     }
//     return false
  
//     // return new Set(arr).size !== arr.length
    
//   }

function hashMemory(arr) {
    let obj = {}
    for (currentItemInLoop of arr ) {
        if (obj[currentItemInLoop]) {
            obj[currentItemInLoop]++
        }else {
            obj[currentItemInLoop] = 1
        }
    }
    return obj
}
console.log(hashMemory([1,2,3,1]))