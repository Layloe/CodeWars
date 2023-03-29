function groupByWeek(list) {
    //First group by day then find a way to make Sunday the start of a new week. Hover over forEach
    //Use parts of this loop but instead of it grouping to days group to week
    // if (item.dayOfWeek == group[0]?.dayOfWeek || group.length == 0)
    // TODO
    // Sort the dates by date string
    const weeks = [];
  let currentWeek = { weekNumber: 1, days: [] };

  // Loop through each date and group them into weeks
  for (let i = 0; i < list.length; i++) {
    const date = list[i];
    const dayOfWeek = getDayOfWeek([i])

    // If this date is in a different week than the previous one, start a new week
    if (dayOfWeek === 'Monday' && currentWeek.days.length > 0) {
      weeks.push(currentWeek);
      currentWeek = { weekNumber: currentWeek.weekNumber + 1, days: [] };
    }

    // Add this date to the current week
    currentWeek.days.push(date);
  }

  // Add the final week to the list
  if (currentWeek.days.length > 0) {
    weeks.push(currentWeek);
  }

  return weeks;
}
 
    console.log(groupByWeek(data3))