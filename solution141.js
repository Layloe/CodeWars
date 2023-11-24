// What we want to implement is Array.prototype.filter() function, just like the existing Array.prototype.filter(). Another similar function is _.filter() in underscore.js and lodash.js.

// The usage will be quite simple, like:

// [1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]
// Of course, the existing Array.prototype.filter() function has been undefined for the purposes of this Kata.

//*Parameters: an arr of nums

//*Return: a num > than 3?

//*Example:
// *[1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]

//*Psuedocode:create a function that uses the filer method?


function greaterThanThree(arr) {
    const testFilter = arr.filter(item => item > 3)
    return testFilter
}
Array.prototype.filter = function ( func, arr = [] ) {
    for ( let i = 0; i < this.length; i++ ) {
        if ( func(this[i]) ) { arr.push(this[i]) }
    }
    return arr
}

console.log(greaterThanThree([1, 2, 3, 4, 5]))
