// Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

// strCount({
//   first: "1",
//   second: "2",
//   third: false,
//   fourth: ["anytime",2,3,4],
//   fifth:  null
//   })
//   //returns 3
function strCount(obj){
    let totalStrCount = 0

    for (key in obj) {
        if (typeof obj[key] == 'string') {
            totalStrCount++
        }
        if (typeof obj[key] == 'object') {
            totalStrCount += strCount(obj[key]) 
        }
    }
    return totalStrCount
}
    console.log(strCount({
          first: "1",
          second: "2",
          third: false,
          fourth: ["anytime",2,3,4],
          fifth:  null
          }))
// input is going to be an object with different data types
// output is going to be a number total
// example is in the argument 
// loop thru code and use conditionals with typeOf == string, or try hash map