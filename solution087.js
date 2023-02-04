const assert = require('assert')


function getDayOfWeek(dateString) {
    const myDate = new Date(dateString)
        month = myDate.getMonth(),
        date = myDate.getUTCDate(),
        day = myDate.getUTCDay()

    let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    let months  = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return weekday[day].toLowerCase()
}

function getTimeOfDay(dateString) {

    const myDate = new Date(dateString)
    hours = myDate.getUTCHours()
    if (hours < 12) {
         return "morning"
    } else if (hours < 18 ){
        return "afternoon"
    }else  {
        return "evening"
    }
    // hint: Date objects can return the hours as a number, e.g.
    // new Date("2023-01-09T19:03:04Z").getUTCHours()() => 19
    // new Date("2023-01-09T07:03:04Z").getUTCHours()() => 7
    // Try a simple categorization where before 12 is "morning", from 12-6 is "afternoon", and after 6 is "evening"
    // Don't forget -- hours will be in 24 hour time! (i.e. 17 == 5pm)
  }
//   console.log(getTimeOfDay("2023-01-17T11:00:00Z"))
  assert.strictEqual(getTimeOfDay("2023-01-18T03:00:00Z"), "morning");
  assert.strictEqual(getTimeOfDay("2023-01-17T13:00:00Z"), "afternoon");
  assert.strictEqual(getTimeOfDay("2023-01-19T23:00:00Z"), "evening");
  
  /**
 * Task 3:
 * Given a list of objects with a `date` property,
 * return a new list where each object has
 * a new `dayOfWeek` property to the list,
 * which corresponds to the day of the week for the date string
 */

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
  const data1 = [
    { date: "2023-01-05T01:01:01Z", dayOfWeek: "thursday" },
    { date: "2023-01-05T12:03:04Z", dayOfWeek: "thursday" },
    { date: "2023-01-06T13:01:01Z", dayOfWeek: "friday" },
    { date: "2023-01-06T22:03:04Z", dayOfWeek: "friday" },
    { date: "2023-01-07T01:01:01Z", dayOfWeek: "saturday" },
    { date: "2023-01-07T22:03:04Z", dayOfWeek: "saturday" },
    { date: "2023-01-08T01:01:01Z", dayOfWeek: "sunday" },
    { date: "2023-01-08T12:03:04Z", dayOfWeek: "sunday" },
    { date: "2023-01-09T11:01:01Z", dayOfWeek: "monday" },
    { date: "2023-01-09T19:03:04Z", dayOfWeek: "monday" },
  ];
  
  function assignDayOfWeek(list) {
    const dateProp =  list.map((value) => ({
        // { date: "2023-01-05T01:01:01Z" }, Value is going to look like this 
    
             date: value.date,
             dayOfWeek: getDayOfWeek([value.date])
          
       }))
     
         return dateProp
     
    // hint: use the "getDayOfWeek" function you already wrote
  }
  
  assert.deepStrictEqual(assignDayOfWeek(data0), data1);

  /**
 * Task 4:
 * Given "data1",
 * return a new list where each object has a new "timeOfDay" property,
 * which corresponds to "morning", "afternoon", or "evening"
 */

// this is what the data should look like after going through our "assignTimeOfDay" function
const data2 = [
  { date: "2023-01-05T01:01:01Z", dayOfWeek: "thursday", timeOfDay: "morning" },
  { date: "2023-01-05T12:03:04Z", dayOfWeek: "thursday", timeOfDay: "afternoon" },
  { date: "2023-01-06T13:01:01Z", dayOfWeek: "friday", timeOfDay: "afternoon" },
  { date: "2023-01-06T22:03:04Z", dayOfWeek: "friday", timeOfDay: "evening" },
  { date: "2023-01-07T01:01:01Z", dayOfWeek: "saturday", timeOfDay: "morning" },
  { date: "2023-01-07T22:03:04Z", dayOfWeek: "saturday", timeOfDay: "evening" },
  { date: "2023-01-08T01:01:01Z", dayOfWeek: "sunday", timeOfDay: "morning" },
  { date: "2023-01-08T12:03:04Z", dayOfWeek: "sunday", timeOfDay: "afternoon" },
  { date: "2023-01-09T11:01:01Z", dayOfWeek: "monday", timeOfDay: "morning" },
  { date: "2023-01-09T19:03:04Z", dayOfWeek: "monday", timeOfDay: "evening" },
];

function assignTimeOfDay(list) {

  const timeOf =  list.map((value) => ({
    // { date: "2023-01-05T01:01:01Z" }, Value is going to look like this 

         date: value.date,
         dayOfWeek: getDayOfWeek([value.date]),
         timeOfDay: getTimeOfDay([value.date])
      
   }))
 
     return timeOf
 
// hint: use the "getDayOfWeek" function you already wrote

  // hint: use the "getTimeOfDay" function you already wrote
}
// console.log(assignTimeOfDay(data1), data2)

assert.deepStrictEqual(assignTimeOfDay(data1), data2);


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
  // [
  //   { date: "2023-01-05T01:01:01Z", dayOfWeek: "thursday", timeOfDay: "morning" },
  //   { date: "2023-01-05T12:03:04Z", dayOfWeek: "thursday", timeOfDay: "afternoon" },Value is going to look like this 
  // ],                                                                                   
  const dayOf =  list.map((value) => ({

    date: value.date,
    dayOfWeek: getDayOfWeek([value.date]),
    timeOfDay: getTimeOfDay([value.date])
            


        //  date: value.day,
        //  dayOfWeek: getDayOfWeek([value.dayOf]),
        //  timeOfDay: getTimeOfDay([value.date])
      
   }))
 
     return dayOf
  }

  console.log(groupByDay(data2))
// assert.deepStrictEqual(groupByDay(data2), data3);

// const testGroup = arr.group()





  