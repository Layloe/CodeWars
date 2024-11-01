// 7. Check for Duplicates
// Problem: Given an array of integers, return true if any value appears at least twice in the array. Return false if every element is distinct. Example:
// Input: [1, 2, 3, 1]
// Output: True

function checkForDupes(arrNums) {
    let countObj = {}
    for (const currentItemInLoop of arrNums) {
        if (countObj[currentItemInLoop]) {
            countObj[currentItemInLoop]++
        } else {
            countObj[currentItemInLoop] >= true
        }
    }
    return countObj
}
console.log(checkForDupes([1, 2, 3, 1]))