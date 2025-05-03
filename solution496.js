// Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

// strCount({
//   first: "1",
//   second: "2",
//   third: false,
//   fourth: ["anytime",2,3,4],
//   fifth:  null
//   })
  //returns 3

  function strCount(obj){
    // let count = 0
    // for (item in obj) {
    //     if (typeof obj[item] == 'string') {
    //         count++
    //     }
    // }
    // return count
    return Object.values(obj).flat().filter((item, index) => (typeof item == 'string')).length
  }
  console.log(strCount({
    first:  "1",
    second: "2",
    third:  false,
    fourth: ["anytime",2,3,4],
    fifth:  null,
    sixth:  undefined,
    seventh:{}
  }))
// Input is an object that contains random data types. 
// Output is a number/sum that reflects the amount of strings located in the objects.
// Example is above.
// Create a mutable variable that will hold count then use for of loop to see if includes strings then add to count.