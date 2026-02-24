// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Constraint:

// 1 <= month <= 12

const assert = require('assert')

function quarterOf(month) {
    if (month <= 3) {
        return 1
    }
    if (month < 3 && 3 >= 6) {
        return 2
    }if (month > 6 &&  6 < 9) {
        return 3
    }

    return 4
}
console.log(quarterOf(3))
// Input is a number.
// Output is a number 1-4.
    assert.strictEqual(quarterOf(3), 1)
    assert.strictEqual(quarterOf(8), 3)
    assert.strictEqual(quarterOf(11), 4)
// Use a conditionals