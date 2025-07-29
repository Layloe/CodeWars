// Write a function that receives two strings as parameter. This strings are in the following format of date: YYYY/MM/DD. Your job is: Take the years and calculate the difference between them.

// Examples:
// '1997/10/10' and '2015/10/10' -> 2015 - 1997 = returns 18 
// '2015/10/10' and '1997/10/10' -> 2015 - 1997 = returns 18
// At this level, you don't need validate months and days to calculate the difference.

const assert = require('assert')

var howManyYears = function(date1, date2){
    
    if (date1.slice(0, 4) > date2.slice(0, 4)) {
        return date1.slice(0, 4) - date2.slice(0, 4)
    } else {
        return date2.slice(0, 4) - date1.slice(0, 4)
    }
}
console.log(howManyYears('1990/10/10', '2015/10/10'))
// Input had two strings that are both dates in YYYY/MM/DD format.
// Output is the difference between the two years, the sum will be a string.
    assert.strictEqual(howManyYears('1997/10/10', '2015/10/10'), 18);
    assert.strictEqual(howManyYears('1990/10/10', '2015/10/10'), 25);
    assert.strictEqual(howManyYears('2015/10/10', '1990/10/10'), 25);
    assert.strictEqual(howManyYears('1992/10/24', '2015/10/24'), 23);
    assert.strictEqual(howManyYears('2018/10/10', '2000/10/10'), 18);
// If else then slice[03] both params and compare what is greater to do the subtraction.  