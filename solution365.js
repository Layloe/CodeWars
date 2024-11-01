function countOfNums(arrOfNumbers) {
    let dictionaryCount = {}
    for (const currentNum of arrOfNumbers) {
        if (dictionaryCount[currentNum]) {
            dictionaryCount[currentNum]++
        }else {
            dictionaryCount[currentNum] = 1
        }
    }
    return dictionaryCount
}
console.log(countOfNums([444,4,44,4444,5,6,7,444,4]))