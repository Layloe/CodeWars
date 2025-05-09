// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0
 

// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

// function findJewels(jewels) {
//     let countObj = {}
//     for(const currentItemInLoop of jewels) {
//         if (countObj[currentItemInLoop]) {
//             countObj[currentItemInLoop]++
//         }else {
//             countObj[currentItemInLoop] = 1
//         }
//     }  
//     return countObj
// }
// console.log(findJewels('AbBaaa'))



//from memory

function jewelsCount(jewelsArr) {
    let objCount = {}
    for (const currentItem of jewelsArr){
        if (objCount[currentItem]){
            objCount[currentItem]++
        }else {
            objCount[currentItem] = 1 && objCount[currentItem] > 2

        }
    }
    return objCount
}
console.log(jewelsCount('AbBaaa'))