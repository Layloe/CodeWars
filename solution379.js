// Create a function that returns the CSV representation of a two-dimensional numeric array.
// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 
    
// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'

// Array's length > 2.
// Note: you shouldn't escape the \n, it should work as a new line.

function toCsvText(array) {
    const parseArr = array.join('/n')
    return parseArr
    
 }
 console.log(toCsvText([
    [ 0, 1, 2, 3, 45 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]
   ]))

//input is going to be nested arrays of numbers
//output CSV representation of a two-dimensional numeric array
//example is above
//join or concat array then split, loop through arr and if arr length is > 4 splice.. nope it's just a join('/n') bad visual representation of code challenge 