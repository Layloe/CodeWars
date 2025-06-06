// Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.

// Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.

// Note that numbers written as strings are strings and must be sorted with the other strings.

function dbSort(a){
    const findNums = a.filter(nums => typeof nums === 'number').sort((a, b) => a - b)
    const findStr = a.filter(str => typeof str === 'string').sort()
    return findNums.concat(findStr)
}
console.log(dbSort(["Apple",46,"287",574,"Peach","3","69",78,"Grape","423"]))
// Input will contain an array of string and numbers.
// Output will be an array that has has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.
    //   assert.deepEqual(dbSort([6, 2, 3, 4, 5]), [2, 3, 4, 5, 6]);
    //   assert.deepEqual(dbSort([14, 32, 3, 5, 5]), [3, 5, 5, 14, 32]);
    //   assert.deepEqual(dbSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
    //   assert.deepEqual(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]), [0,2,2,"Apple","Banana","Mango","Orange"]);
    //   assert.deepEqual(dbSort(["C", "W", "W", "W", 1, 2, 0]), [0,1,2,"C","W","W","W"]);
    //   assert.deepEqual(dbSort(["Apple",46,"287",574,"Peach","3","69",78,"Grape","423"]), [46, 78, 574, '287', '3', '423', '69', 'Apple', 'Grape', 'Peach'] )
// 