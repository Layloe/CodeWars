/**
 * Task 5:
 * Group by week.
 * Assuming that your list is in chronological order (which it is),
 * group elements by week, where Saturday is the last day of the week, and Sunday is the first day of the week.
 */

const data4 = [
    // week 1
    [
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
      ]
    ],
    // week 2 (because these dates come after week 1)
    [
      [
        { date: "2023-01-08T01:01:01Z", dayOfWeek: "sunday", timeOfDay: "morning" },
        { date: "2023-01-08T12:03:04Z", dayOfWeek: "sunday", timeOfDay: "afternoon" },
      ],
      [
        { date: "2023-01-09T11:01:01Z", dayOfWeek: "monday", timeOfDay: "morning" },
        { date: "2023-01-09T19:03:04Z", dayOfWeek: "monday", timeOfDay: "evening" },
      ]
    ],
  ];
  
  function groupByWeek(list) {
    let weekSplit = []
    let weekGroup = []

    for(let i = 0; i < list.length; i++){
        // Get the current item
            const  item = list[i]
        // If the item matches the group add it to the group otherwise start a new group
            if (item.dayOfWeek == group[0]?.dayOfWeek || group.length == 0) {
        // Pushing item to to group arr
              group.push(item)
     } 
     }
    //  function weekCount(year, month_number) {

   
    
    //     var firstOfMonth = new Date(year, month_number-1, 1);
    //     var lastOfMonth = new Date(year, month_number, 0);
    
    //     var used = firstOfMonth.getDay() + lastOfMonth.getDate();
    
    //     return Math.ceil( used / 7);
    // }

}
  assert.deepStrictEqual(groupByWeek(data3), data4);
  