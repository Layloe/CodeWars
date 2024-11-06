function hashmapRecall(arrNums) {
    let objCount = {}
    for (const currentItem of arrNums) {
        if (objCount[currentItem]) {
            objCount[currentItem]++
        } else {
            objCount[currentItem] = true
        }
    }
    return objCount
}
console.log(hashmapRecall([1,2,3,4,5,1]))