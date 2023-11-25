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
// This filter function return an array with values that meet 
// the conditions set in the ruleCondition callback function.

Array.prototype.filter = function( ruleCondition ) {           //? for reviewing  
    // Create an empty array to store the values that satisfy the ruleCondition
      var arr = [];
      
      this.forEach( function( currentValue ) {
      // Evaluate each element and push the value when content in array meet condition
        if( ruleCondition( currentValue ) ) arr.push( currentValue );
      });
      return arr;
    }

console.log(greaterThanThree([1, 2, 3, 4, 5]))
