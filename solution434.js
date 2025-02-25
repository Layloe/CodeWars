
// Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.

// Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.

// Note that numbers written as strings are strings and must be sorted with the other strings.
const assert = require('assert')

function dbSort(a){
    const sortNums = a.filter(item => typeof item == 'number').sort()
    const sortString = a.filter((item) => typeof item == 'string').sort()

    return sortNums.concat(sortString)
    }
    console.log(dbSort(["Apple",46,"287",574,"Peach","3","69",78,"Grape","423"]))
// input will be an array of numbers and strings
// output will be an array with first the nums sorted in ascending order then strings sorted in ascending order.
assert.strictEqual(dbSort([6, 2, 3, 4, 5]), [2, 3, 4, 5, 6]);
assert.strictEqual(dbSort([14, 32, 3, 5, 5]), [3, 5, 5, 14, 32]);
assert.strictEqual(dbSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
assert.strictEqual(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]), [0,2,2,"Apple","Banana","Mango","Orange"]);
assert.strictEqual(dbSort(["C", "W", "W", "W", 1, 2, 0]), [0,1,2,"C","W","W","W"]);
assert.strictEqual(dbSort(["Apple",46,"287",574,"Peach","3","69",78,"Grape","423"]), [46, 78, 574, '287', '3', '423', '69', 'Apple', 'Grape', 'Peach'] )
// going to try to change then to ascii nums then sort and change back. First map fromCharCode then charCOdeAt.