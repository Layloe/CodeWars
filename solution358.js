
const ArrowFunc = function(arr) {
    return arr.map(nums => String.fromCharCode(nums) ).join('')
  }
  console.log(ArrowFunc([70,85,83,32,82,79,72,32,68,65,72]))

//Input is going to be an array of non negative numbers, will never be empty

//Output is going  transforming the nums into to be a string 

//Test.assertEquals(ArrowFunc([84,101,115,116]), 'Test')

//Iterate using map, Then use String constructor with method fromCharCode() with nums parameter