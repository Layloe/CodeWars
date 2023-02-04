// const assert = require('assert')

function getDayOfWeek(dateString) {
  const myDate = new Date(dateString)
      month = myDate.getMonth(),
      date = myDate.getUTCDate(),
      day = myDate.getUTCDay()

  let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

  let months  = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return weekday[day].toLowerCase()
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

function assignDayOfWeek(dateString) {

  const dateProp =  {
date: `${dateString}`,
dayOfWeek: getDayOfWeek(dateString)


// return dateProp
//    data0.map((data0) => ({
 
//         date: data0.date,
//         dayOftheWeek: data0.getDayOfWeek(dateString)
      
      
}

  return dateProp
}
  
  
  // hint: use the "getDayOfWeek" function you already wrote

console.log(assignDayOfWeek("2023-01-09T19:03:04Z"))

//   assert.deepStrictEqual(assignDayOfWeek(data0), data1);
/**
 * Task 5:
 * Group the list elements by day.
 * Note: you can assume that your list is already sorted chronologically
 */

// this is what the data should look like after going through our "groupByDay" function
const data3 = [
    [
      { date: "2023-01-05T01:01:01Z", dayOfWeek: "thursday", timeOfDay: "morning" },
      { date: "2023-01-05T12:03:04Z", dayOfWeek: "thursday", timeOfDay: "afternoon" },
    ],
    [
      { date: "2023-01-06T13:01:01Z", dayOfWeek: "friday", timeOfDay: "afternoon" },
      { date: "2023-01-06T22:03:04Z", dayOfWeek: "friday", timeOfDay: "evening" },
    ],
    [
      { date: "2023-01-07T01:01:01Z", dayOfWeek: "saturday", timeOfDay: "morning" },
      { date: "2023-01-07T22:03:04Z", dayOfWeek: "saturday", timeOfDay: "evening" },
    ],
    [
      { date: "2023-01-08T01:01:01Z", dayOfWeek: "sunday", timeOfDay: "morning" },
      { date: "2023-01-08T12:03:04Z", dayOfWeek: "sunday", timeOfDay: "afternoon" },
    ],
    [
      { date: "2023-01-09T11:01:01Z", dayOfWeek: "monday", timeOfDay: "morning" },
      { date: "2023-01-09T19:03:04Z", dayOfWeek: "monday", timeOfDay: "evening" },
    ]
  ];
  
  function groupByDay(list) {
  

    let groups = {};
for (let i = 0; i < list.length; i++) {
  let dayOfTheWeek = list[i].dayOfWeek;
  if (!groups[dayOfTheWeek]) {
    groups[dayOfTheWeek] = [];
  }
  groups[dayOfTheWeek].push(list[i].date);
  // groups[dayOfTheWeek].push(list[i].timeOfDay);
}
list = [];
for (let dayOfTheWeek in groups) {
  list.push({dayOfWeek: dayOfTheWeek, date: groups[dayOfTheWeek], timeOfDay:[dayOfTheWeek]});
}
    // const grouped = []
    // let group = []
    // let iterate  =  list.forEach((value) => ({ 
      
      // switch (day){
      //   case 0:
      //       day = 'sunday'
      //       break;
      //   case 1:
      //       day = 'monday'
      //       break;
      //   case 2:
      //       day = 'tuesday'
      //       break;
      //   case 3:
      //       day = 'wednesday'
      //       break;
      //   case 4:
      //       day = 'thursday'
      //       break;
      //   case 5:
      //       day = 'friday'
      //       break;
      //   case 6:
      //       day = 'saturday'      
    }
          //  date: value.date,
          //  dayOfWeek: getDayOfWeek([value.date]),
          //  timeOfDay: getTimeOfDay([value.date])
        
  //    }))
  //   // hint: use the "dayOfWeek" property to group the data
  // }
  console.log(groupByDay(data3))
  // assert.deepStrictEqual(groupByDay(data2), data3);

//   list.map((value) => ({
//     // { date: "2023-01-05T01:01:01Z" }, Value is going to look like this 

//          date: value.date,
//          dayOftheWeek: getDayOfWeek([value.date])
      
//    }))