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

// console.log(assignDayOfWeek("2023-01-09T19:03:04Z"))

//   assert.deepStrictEqual(assignDayOfWeek(data0), data1);
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
  

    
//       const result = {};
//       for (let i = 0; i < list.length; i++) {
//         const date = list[i].date;
//         const day = new Date(date).toLocaleDateString();
//         if (!result[day]) {
//           result[day] = [];
//         }
//         result[day].push(list[i]);
//       }
//       return result;
//     }
//     let groups = {};
// for (let i = 0; i < list.length; i++) {
//   let dayOfTheWeek = list[i].dayOfTheWeek;
//   if (!groups[dayOfTheWeek]) {
//     groups[dayOfTheWeek] = [];
//   }
//   groups[dayOfTheWeek].push(list[i].date);
//   groups[dayOfTheWeek].push(list[i].timeOfDay);
// }
// list = [];
// for (let dayOfTheWeek in groups) {
//   list.push({dayOfWeek: dayOfTheWeek, date: groups[dayOfTheWeek], timeOfDay:[dayOfTheWeek]});
// }      
    
}    
        
 
//   console.log(groupByDay(data2))
  // assert.deepStrictEqual(groupByDay(data2), data3);

//   list.map((value) => ({
//     // { date: "2023-01-05T01:01:01Z" }, Value is going to look like this 

//          date: value.date,
//          dayOftheWeek: getDayOfWeek([value.date])
      
//    }))


/**
 * this function will take an array as input,
 * and return an array, with every 2 elements grouped together.
 * 
 * Example input: [1, 2, 3, 4, 5, 6]
 * Example output: [[1, 2], [3, 4], [5, 6]]
 * 
 * [           // groupsSplit
 *   [1, 2],   // need a variable for this group
 *   [3, 4],   // need a variable for this group
 *   [5, 6]    // need a variable for this group
 * ]
 * 
 * initially, groupsSplit is an empty array []
 * loop through the list, and every 2 elements get added to an sub-array (a group)
 * when the sub-array has 2 elements, add it to groupsSplit
 * 
 * @param {number[]} list
 */
function splitBy2(list) {
  let groupsSplit = []
  // initially, group is empty
  // on the first iteration of the loop, we will add the first element to group
  // group == [1]
  // on the second iteration of the loop, we will add the second element to group
  // group == [1, 2]
  // when group has 2 elements in it, we can add group to groupsSplit
  // groupsSplit = [ [1, 2] ]
  //
  // group is just a temporary container to hold the elements
  //? let group = []
  //?for (var i = 0; i < list.length; i += 2) {
  //? if (i + 1 < list.length) {
  //?   groupsSplit.push([list[i], list[i + 1]]);
  //? } else {
  //?   groupsSplit.push([list[i]]);
  //? }
  //? }
  for (let i= 0; i < list.length; i++) {
  // Searching the array for grouping elements
    let num = list[i]
  // If else to categorise arrays in proper locations
    if (group < 2) {
      group.push(num)
      console.log(num)
    } else  {
      group.push(group)
  console.log(groupsSplit)
    }
   
  }
  return groupsSplit
}

// let array = [1, 2, 3]
// I want the 2nd element
// how do I do that
// let secondElement = array[1]
// let anotherArray = []
// how do I add secondElement to anotherArray


console.log(splitBy2([1, 2, 3, 4, 5, 6]))
// expect to see this in the terminal: [[1, 2], [3, 4], [5, 6]]
