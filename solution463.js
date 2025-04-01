// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){
    const findDupe = array.filter((item, index) => {
        if (array.indexOf(item) !== array[index]) {
            console.log(array.indexOf(item))
            return item
        } else {
            return Math.max(...array) 
        }
        
    })
}
// const findLongest = len => len.reduce((acc, curr) => String(curr).length > String(acc).length ? curr : acc)
// const findLongest = l => l.reduce((acc, curr) => (`${curr}`.length > `${acc}`.length) ? curr : acc) 
console.log(findLongest([1, 10, 100, 33, 33]))
// Input will contain an arr of nums 

// Output is going to be the highest num or longest

// Test.assertEquals(findLongest([1, 10, 100]), 100)
// Test.assertEquals(findLongest([9000, 8, 800]), 9000)
// Test.assertEquals(findLongest([8, 900, 500]), 900)

// Use map  else use math max with spread operator 


