// const assert = require('assert')

function getDayOfWeek(dateString) {
    const myDate = new Date(dateString)
        month = myDate.getMonth(),
        date = myDate.getUTCDate(),
        day = myDate.getUTCDay()

    let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    let months  = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return weekday[day]
    // hint: you can create a Date with "new Date(dateString)"
    // hint: you can use the `getUTCDay()` method to get a number corresponding to the week day,
    // for example 0 = sunday, 1 = monday, etc
    // TODO
  }

//   console.log(getDayOfWeek("2023-01-19T13:00:00Z"))
  
//   assert.strictEqual(getDayOfWeek("2023-01-18T03:00:00Z"), "wednesday");
//   assert.strictEqual(getDayOfWeek("2023-01-17T03:00:00Z"), "tuesday");
//   assert.strictEqual(getDayOfWeek("2023-01-19T13:00:00Z"), "thursday");
      
//  * Task 3:
//  * Given a list of objects with a `date` property,
//  * return a new list where each object has
//  * a new `dayOfWeek` property to the list,
//  * which corresponds to the day of the week for the date string
//  */

// this is our initial data set.
// we will be modifying this data throughout all our other functions
const data0 = [
  { date: "2023-01-05T01:01:01Z" },
  { date: "2023-01-05T12:03:04Z" },
  { date: "2023-01-06T13:01:01Z" },
  { date: "2023-01-06T22:03:04Z" },
  { date: "2023-01-07T01:01:01Z" },
  { date: "2023-01-07T22:03:04Z" },
  { date: "2023-01-08T01:01:01Z" },
  { date: "2023-01-08T12:03:04Z" },
  { date: "2023-01-09T11:01:01Z" },
  { date: "2023-01-09T19:03:04Z" },
];
// this is what the data should look like after going through our "assignDayOfWeek" function
// const data1 = [
//     { date: "2023-01-05T01:01:01Z", dayOfWeek: "thursday" },
//     { date: "2023-01-05T12:03:04Z", dayOfWeek: "thursday" },
//     { date: "2023-01-06T13:01:01Z", dayOfWeek: "friday" },
//     { date: "2023-01-06T22:03:04Z", dayOfWeek: "friday" },
//     { date: "2023-01-07T01:01:01Z", dayOfWeek: "saturday" },
//     { date: "2023-01-07T22:03:04Z", dayOfWeek: "saturday" },
//     { date: "2023-01-08T01:01:01Z", dayOfWeek: "sunday" },
//     { date: "2023-01-08T12:03:04Z", dayOfWeek: "sunday" },
//     { date: "2023-01-09T11:01:01Z", dayOfWeek: "monday" },
//     { date: "2023-01-09T19:03:04Z", dayOfWeek: "monday" },
//   ];
  
 
  function assignDayOfWeek(list) {

    // let testing = getDayOfWeek()
    const dateProp =  list.map((value) => ({
    // { date: "2023-01-05T01:01:01Z" }, Value is going to look like this 

         date: value.date,
         dayOftheWeek: getDayOfWeek([value.date])
      
   }))
 
     return dateProp
 }
         
        

  


//  date: value.date,
//  dayOftheWeek: getDayOfWeek([`${dateString}`])

// const dateProp =  {
  // date: `${dateString}`,
  // dayOfWeek: getDayOfWeek(dateString)


// return dateProp
  


    
    
    // hint: use the "getDayOfWeek" function you already wrote
  
  console.log(assignDayOfWeek(data0))
  
//   assert.deepStrictEqual(assignDayOfWeek(data0), data1);

function groupByDay(list) {
  
  const grootByDay = list.map(( value) => {
      
      dayOfWeek: getDayOfWeek([value.date])
       }
      );

  return grootByDay

  // hint: use the "dayOfWeek" property to group the data
}
console.log(groupByDay(data3))