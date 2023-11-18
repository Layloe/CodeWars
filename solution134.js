// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.




// Parameters: an arr of nums one being the [value, integer]

// Return: an arr of the value and it's multibles

// Example:
// assert.sameOrderedMembers(findMultiples(5, 25), [5, 10, 15, 20, 25])
// assert.sameOrderedMembers(findMultiples(1, 2), [1, 2])
// assert.sameOrderedMembers(findMultiples(5, 7), [5])
// assert.sameOrderedMembers(findMultiples(4, 27), [4, 8, 12, 16, 20, 24])
// assert.sameOrderedMembers(findMultiples(11, 54), [11, 22, 33, 44])

// Psuedocode: compare and divide value by the integer using modulis, if it can't be divided return the value

function findMultiples(integer, limit) {
    const testSum = []

    for (let index = integer; index <= limit ; index+= integer) {
      
      testSum.push(index)
      
    }
    // const testInt = Math.floor(limit / integer)
    // const testLimit = limit % integer
    //   if ( testLimit > 0 ) {
    //   return integer
    // } else {
    //   return testInt
    // }
      return testSum
}

  console.log(findMultiples(5,25))