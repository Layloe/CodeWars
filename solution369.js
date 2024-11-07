// Two sum
function twoSun(arr, sum) {
//pairs arr
const pairs = []
//hashmap obj
const seenNums = {}
//loop 
for (const currentItem of arr) {
    const diff = sum - num1FromArr
    if(seenNumsums[diff]){
        pairs.push([currentItem, diff])
    }else { 
        seenNums[currentItem] = true
    }
}
    //
}
console.log(twoSun([1,2,2,3,4], 4), '[[2,2], [1,3]]')