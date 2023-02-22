
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
    const result = [];

    for (let i = 0; i < list.length; i++) {
      const date = new Date(list[i].date);
      const day = date.toLocaleDateString();
  
      if (!result[day]) {
        result[day] = [];
      }
      result[day].push(list[i]);
    }
  
    return result;
    // hint: use the "dayOfWeek" property to group the data
    // initially, group is empty
  // on the first iteration of the loop, we will add the first element to group
  // group == [1]
  // on the second iteration of the loop, we will add the second element to group
  // group == [1, 2]
  // when group has 2 elements in it, we can add group to groupsSplit
  // groupsSplit = [ [1, 2] ]
  //
  // group is just a temporary container to hold the elements
  //?  let group = []
  //?for (var i = 0; i < list.length; i += 2) {
  //? if (i + 1 < list.length) {
  //?   groupsSplit.push([list[i], list[i + 1]]);
  //? } else {
  //?   groupsSplit.push([list[i]]);
  //? }
  //? }
//   for (let i= 0; i < list.length; i+= 2) {
    // Searching the array for grouping elements
    //   let num = list[i]
    // If else to categorise arrays in proper locations
    //   if (group < 2) {
    //     group.push(num)
    //     console.log(num)
    //   } else  {
    //     group.push(group)
    // console.log(groupsSplit)
    //   }
     
    // }
    // return groupsSplit
  }
  
  console.log(groupByDay(data2))
//   assert.deepStrictEqual(groupByDay(data2), data3);
