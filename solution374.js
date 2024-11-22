// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

// const sum_mix = arr => arr.reduce((curr, acc) => acc + parseInt(curr) ,0)

function sum_mix(arr) {
    let sum = 0
    for (const curr of arr) {
        sum += parseInt([curr])
    }
    return sum
    // const parseArr = arr.map(item => parseInt(item))
    // return parseArr.reduce((curr,acc) => acc + curr, 0)
}
console.log(sum_mix(['5', '0', 9, 3, 2, 1, '9', 6, 7]))

///intput is going to be an arr of mixed strings and nums
//output is going to be a number
//example ['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42)
//use method parseInt and reduce()
